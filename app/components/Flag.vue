<template>
  <UTooltip
    :text="`Couleurs générées : ${generatedFlagColors.length} ID de forme généré : ${generatedFlagShape}`"
    size="xl"
  >
    <canvas ref="flagCanvas" width="512" height="256"></canvas>
  </UTooltip>
  <!-- <p>{{ generatedFlagColors }}</p>
  <p>{{ generatedFlagSymbol }}</p>
  <p>{{ generatedFlagShape }}</p>
  <p>{{ flagShapes[generatedFlagShape] }}</p> -->
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { flagColors, flagSymbols, flagShapes } from '~/utils/constants'
import type { AxisValues, SymbolData, FlagSymbol } from '~/utils/constants'

interface Props {
  axes: AxisValues
}

const props = defineProps<Props>()
const flagCanvas = ref<HTMLCanvasElement | null>(null)

// Image loading handler
const loadImages = async () => {
  const imageUrls = {
    sprites: '/images/flag_sprites.png'
    // Add all your image paths here
  }

  const loadedImages = {} as Record<string, HTMLImageElement>

  const loadImage = (key: string, url: string): Promise<void> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => {
        loadedImages[key] = img
        resolve()
      }
      img.src = url
    })
  }

  await Promise.all(
    Object.entries(imageUrls).map(([key, url]) => loadImage(key, url))
  )

  return loadedImages
}

const drawFlag = (images: Record<string, HTMLImageElement>) => {
  if (!flagCanvas.value) return

  const ctx = flagCanvas.value.getContext('2d')
  if (!ctx) return

  let spriteX = 256
  let spriteY = 128
  let spriteS = 1.0

  const colors = generatedFlagColors.value
  const flagId = generatedFlagShape.value
  const symbolData = generatedFlagSymbol.value

  if (flagId < 0) {
    ctx.beginPath()
    ctx.rect(0, 0, 512, 256)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
  } else {
    for (let i = 0; i < flagShapes[flagId].shapes.length; i++) {
      const path = flagShapes[flagId].shapes[i]
      const numPoints = path.length / 2

      ctx.beginPath()
      ctx.moveTo(path[1] * 512, path[2] * 256)

      if (path[1] == 'circle') {
        ctx.arc(
          path[2] * 512,
          path[3] * 256,
          path[4] * 256,
          0,
          2 * Math.PI,
          false
        )
      } else if (
        path[1] == 'circleSymbol' &&
        symbolData[0].parent_type != 'none'
      ) {
        ctx.arc(
          path[2] * 512,
          path[3] * 256,
          path[4] * 256,
          0,
          2 * Math.PI,
          false
        )
      } else {
        for (let j = 1; j < numPoints; j++) {
          ctx.lineTo(path[1 + j * 2 + 0] * 512, path[1 + j * 2 + 1] * 256)
        }
      }
      ctx.fillStyle = colors[path[0]].bgColor
      ctx.fill()
    }

    spriteX = flagShapes[flagId].symbol[0] * 512
    spriteY = flagShapes[flagId].symbol[1] * 256
    spriteS = flagShapes[flagId].symbol[2]
  }

  if (symbolData[0].parent_type != 'none') {
    const tmpC = document.createElement('canvas')
    tmpC.width = images['sprites'].width
    tmpC.height = images['sprites'].height
    const tmpCtx = tmpC.getContext('2d')

    tmpCtx.beginPath()
    tmpCtx.rect(0, 0, tmpC.width, tmpC.height)
    tmpCtx.fillStyle = colors[0].fgColor
    tmpCtx.fill()

    tmpCtx.globalCompositeOperation = 'destination-in'
    tmpCtx.drawImage(images['sprites'], 0, 0)

    ctx.save()
    ctx.translate(spriteX, spriteY)
    ctx.scale(spriteS, spriteS)

    const sx = symbolData[0].transform.x
    const sy = symbolData[0].transform.y

    ctx.save()
    ctx.translate(
      symbolData[0].transform.parent_tx,
      -symbolData[0].transform.parent_ty
    )
    ctx.rotate((symbolData[0].transform.parent_r * Math.PI) / 180)
    ctx.scale(
      symbolData[0].transform.parent_sx,
      symbolData[0].transform.parent_sy
    )
    ctx.drawImage(tmpC, sx * 128, sy * 128, 128, 128, -64, -64, 128, 128)
    ctx.restore()

    if (symbolData[1].parent_type != 'none') {
      const sx = symbolData[1].transform.x
      const sy = symbolData[1].transform.y

      ctx.translate(
        symbolData[0].transform.child_tx,
        -symbolData[0].transform.child_ty
      )
      ctx.rotate((symbolData[0].transform.child_r * Math.PI) / 180)
      ctx.scale(
        symbolData[0].transform.child_sx,
        symbolData[0].transform.child_sy
      )

      ctx.translate(
        symbolData[1].transform.parent_tx,
        -symbolData[1].transform.parent_ty
      )
      ctx.rotate((symbolData[1].transform.parent_r * Math.PI) / 180)
      ctx.scale(
        symbolData[1].transform.parent_sx,
        symbolData[1].transform.parent_sy
      )

      ctx.drawImage(tmpC, sx * 128, sy * 128, 128, 128, -64, -64, 128, 128)
      ctx.restore()
    }

    ctx.restore()
  }
}

onMounted(async () => {
  // sprite.src = '/images/flag_sprites.png'
  const images = await loadImages()
  drawFlag(images)
})

watch(
  () => props.axes,
  async () => {
    const images = await loadImages()
    drawFlag(images)
  },
  { deep: true }
)

const axesValues = computed<AxisValues>(() => {
  return Object.fromEntries(
    Object.entries(props.axes).map(([key, value]) => [
      key,
      value !== null ? value / 100 : null
    ])
  )
})

interface FlagColor {
  bgColor: string
  fgColor: string
  value: number
}

const generatedFlagColors = computed(() => {
  const colors: FlagColor[] = []

  if (!axesValues.value) return colors
  for (const flagColor of flagColors) {
    for (const [axis, axisPercentage] of Object.entries(axesValues.value)) {
      const cond = flagColor.cond[axis] as { vmin: number; vmax: number }
      if (
        !(axis in flagColor.cond) ||
        (axisPercentage || 0) < cond.vmin ||
        (axisPercentage || 0) > cond.vmax
      ) {
        continue
      }
      colors.push({
        bgColor: flagColor.bgColor,
        fgColor: flagColor.fgColor,
        value: axisPercentage || 0
      })
      break
    }
  }

  colors.sort(function (a, b) {
    return b.value - a.value
  })

  if (colors.length <= 0)
    colors.push({ bgColor: '#ffffff', fgColor: '#000000', value: 0 })

  // If the delta between the second and third color is over 0.2, we keep only the first two colors
  if (colors.length > 2 && colors[1].value - colors[2].value > 0.2) {
    colors.splice(2, colors.length - 2)
  }

  return colors
})

const generatedFlagSymbol = computed<SymbolData[]>(() => {
  const defaultSymbol: SymbolData = {
    parent_type: 'none',
    transform: {}
  }

  let symbol0: SymbolData = { ...defaultSymbol }
  let symbol1: SymbolData = { ...defaultSymbol }
  let maxValue = 0

  if (generatedFlagColors.value.length === 0) {
    symbol0 = {
      parent_type: 'dot',
      transform: {
        child_type: 'none',
        x: 3,
        y: 3,
        main: true,
        parent_tx: 0,
        parent_ty: 0,
        parent_sx: 1,
        parent_sy: 1,
        parent_r: 0,
        child_tx: 0,
        child_ty: 0,
        child_sx: 1,
        child_sy: 1,
        child_r: 0
      }
    }
  }

  function getTransformIndex(symbol: FlagSymbol, childType: string): number {
    return symbol.data.transforms.findIndex(
      (transform) => transform.child_type === childType
    )
  }

  function matchCharacteristic(flagSymbol: FlagSymbol): number {
    const match = Object.entries(axesValues.value).find(
      ([axis, axisPercentage]) => {
        const cond = flagSymbol.cond[axis] as { vmin: number; vmax: number }
        if (axis in flagSymbol.cond) {
          return (
            (axisPercentage || 0) >= cond.vmin &&
            (axisPercentage || 0) <= cond.vmax
          )
        }
      }
    )

    return match ? Number(match[1]) : 0
  }

  for (let s0 = 0; s0 < flagSymbols.length; s0++) {
    const matchingCharacteristic0 = matchCharacteristic(flagSymbols[s0])
    if (matchingCharacteristic0 > 0) {
      const transform0 = getTransformIndex(flagSymbols[s0], 'none')

      if (matchingCharacteristic0 > maxValue && transform0 >= 0) {
        symbol0 = {
          parent_type: flagSymbols[s0].data.parent_type,
          transform: flagSymbols[s0].data.transforms[transform0]
        }
        symbol1 = { ...defaultSymbol }
        maxValue = matchingCharacteristic0
      }

      for (let s1 = s0 + 1; s1 < flagSymbols.length; s1++) {
        const transform0 = getTransformIndex(
          flagSymbols[s0],
          flagSymbols[s1].data.parent_type
        )
        const transform1 = getTransformIndex(
          flagSymbols[s1],
          flagSymbols[s0].data.parent_type
        )

        if (transform0 < 0 || transform1 < 0) continue

        const matchingCharacteristic1 = matchCharacteristic(flagSymbols[s1])

        if (matchingCharacteristic1 > 0) {
          const combinedValue =
            matchingCharacteristic0 + matchingCharacteristic1
          if (combinedValue > maxValue) {
            symbol0 = {
              parent_type: flagSymbols[s0].data.parent_type,
              transform: flagSymbols[s0].data.transforms[transform0]
            }
            symbol1 = {
              parent_type: flagSymbols[s1].data.parent_type,
              transform: flagSymbols[s1].data.transforms[transform1]
            }
            maxValue = combinedValue
          }
        }
      }
    }
  }

  if (
    symbol0.parent_type !== 'none' &&
    symbol1.parent_type !== 'none' &&
    symbol1.transform.main &&
    !symbol0.transform.main
  ) {
    return [symbol1, symbol0]
  } else {
    return [symbol0, symbol1]
  }
})

const generatedFlagShape = computed(() => {
  let flagFound = -1
  let flagValue = [0, 0, 0]
  let flagColor = 0
  const numColors = generatedFlagColors.value.length
  for (let i = 0; i < flagShapes.length; i++) {
    if (flagShapes[i].numColors > numColors) continue

    const condValue = [0, 0, 0]
    let accepted = true

    let j = -1
    for (const axisName in flagShapes[i].cond) {
      j++
      const value = axesValues.value[axisName]

      if (
        value < flagShapes[i].cond[axisName].vmin ||
        value > flagShapes[i].cond[axisName].vmax
      ) {
        accepted = false
        break
      }
      if (j < 3) condValue[j] = value
    }

    if (!accepted) continue

    if (accepted && flagColor <= flagShapes[i].numColors) {
      if (
        flagShapes[i].numColors > flagColor ||
        condValue[0] > flagValue[0] ||
        (condValue[0] == flagValue[0] &&
          (condValue[1] > flagValue[1] ||
            (condValue[1] == flagValue[1] && condValue[2] > flagValue[2])))
      ) {
        flagColor = flagShapes[i].numColors
        flagValue = [...condValue]
        flagFound = i
      }
    }
  }

  return flagFound
})
</script>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>
