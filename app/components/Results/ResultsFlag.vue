<template>
  <canvas ref="flagCanvas" :height="props.height" :width="props.width"></canvas>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    height?: number
    width?: number
    axes: AxisValues
  }>(),
  { height: 256, width: 512 }
)

const flagCanvas = ref<HTMLCanvasElement | null>(null)

const loadSprite = async () => {
  return new Promise<HTMLImageElement>((resolve) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.src = '/images/flag_sprites.png'
  })
}

const drawFlag = (sprite: HTMLImageElement) => {
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
  } else if (flagShapes[flagId]) {
    for (let i = 0; i < flagShapes[flagId].shapes.length; i++) {
      const path = flagShapes[flagId].shapes[i]
      if (!path) {
        throw new Error(`Invalid path for flag shape ${flagId}`)
      }

      const numPoints = path.length / 2

      ctx.beginPath()
      const moveToX = typeof path[1] === 'string' ? NaN : path[1]
      ctx.moveTo(moveToX * 512, path[2] * 256)

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
        symbolData[0].parent_type !== 'none'
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
          const pathX = path[1 + j * 2 + 0]
          const pathY = path[1 + j * 2 + 1]
          if (typeof pathX !== 'number' || typeof pathY !== 'number') {
            // throw new Error(`Invalid path types, x=${pathX} y=${pathY}`)
          }

          if (typeof pathX === 'number' && typeof pathY === 'number')
            ctx.lineTo(pathX * 512, pathY * 256)
        }
      }
      ctx.fillStyle = colors[path[0]]?.bgColor ?? ''
      ctx.fill()
    }

    spriteX = (flagShapes[flagId].symbol[0] ?? 0) * 512
    spriteY = (flagShapes[flagId].symbol[1] ?? 0) * 256
    spriteS = flagShapes[flagId].symbol[2] ?? 0
  }

  if (symbolData[0].parent_type !== 'none') {
    const tmpC = document.createElement('canvas')
    tmpC.width = sprite.width
    tmpC.height = sprite.height
    const tmpCtx = tmpC.getContext('2d')
    if (!tmpCtx) {
      throw new Error('Could not create 2d context')
    }

    tmpCtx.beginPath()
    tmpCtx.rect(0, 0, tmpC.width, tmpC.height)
    tmpCtx.fillStyle = colors[0]?.fgColor ?? ''
    tmpCtx.fill()

    tmpCtx.globalCompositeOperation = 'destination-in'
    tmpCtx.drawImage(sprite, 0, 0)

    ctx.save()
    ctx.translate(spriteX, spriteY)
    ctx.scale(spriteS, spriteS)

    const symbol0Tf = symbolData[0].transform

    ctx.save()
    ctx.translate(symbol0Tf.parent_tx ?? 0, -(symbol0Tf.parent_ty ?? 0))
    ctx.rotate(((symbol0Tf.parent_r ?? 0) * Math.PI) / 180)
    ctx.scale(symbol0Tf.parent_sx ?? 0, symbol0Tf.parent_sy ?? 0)
    ctx.drawImage(
      tmpC,
      (symbol0Tf.x ?? 0) * 128,
      (symbol0Tf.y ?? 0) * 128,
      128,
      128,
      -64,
      -64,
      128,
      128
    )
    ctx.restore()

    if (symbolData[1].parent_type != 'none') {
      const symbol1Tf = symbolData[1].transform

      ctx.translate(symbol0Tf.child_tx ?? 0, -(symbol0Tf.child_ty ?? 0))
      ctx.rotate(((symbol0Tf.child_r ?? 0) * Math.PI) / 180)
      ctx.scale(symbol0Tf.child_sx ?? 0, symbol0Tf.child_sy ?? 0)

      ctx.translate(symbol1Tf.parent_tx ?? 0, -(symbol1Tf.parent_ty ?? 0))
      ctx.rotate(((symbol1Tf.parent_r ?? 0) * Math.PI) / 180)
      ctx.scale(symbol1Tf.parent_sx ?? 0, symbol1Tf.parent_sy ?? 0)

      ctx.drawImage(
        tmpC,
        (symbol1Tf.x ?? 0) * 128,
        (symbol1Tf.y ?? 0) * 128,
        128,
        128,
        -64,
        -64,
        128,
        128
      )
      ctx.restore()
    }

    ctx.restore()
  }
}

onMounted(async () => {
  drawFlag(await loadSprite())
})

watch(
  () => props.axes,
  async () => {
    drawFlag(await loadSprite())
  },
  { deep: true }
)

const axesValues = computed<AxisValues>(() => {
  return Object.fromEntries(
    Object.entries(props.axes).map(([key, value]) => [
      key,
      value !== null ? value : null
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

  colors.sort((a, b) => b.value - a.value)

  if (colors.length <= 0)
    colors.push({ bgColor: '#ffffff', fgColor: '#000000', value: 0 })

  // If the delta between the second and third color is over 0.2, we keep only the first two colors
  if (colors.length > 2 && colors[1]!.value - colors[2]!.value > 0.2)
    colors.splice(2, colors.length - 2)

  return colors
})

const generatedFlagSymbol = computed(() => {
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
    const flagSymbol0 = flagSymbols[s0]!
    const matchingCharacteristic0 = matchCharacteristic(flagSymbol0)
    if (matchingCharacteristic0 > 0) {
      const transform0 = getTransformIndex(flagSymbol0, 'none')

      if (matchingCharacteristic0 > maxValue && transform0 >= 0) {
        symbol0 = {
          parent_type: flagSymbol0.data.parent_type,
          transform: flagSymbol0.data.transforms[transform0]!
        }
        symbol1 = { ...defaultSymbol }
        maxValue = matchingCharacteristic0
      }

      for (let s1 = s0 + 1; s1 < flagSymbols.length; s1++) {
        const flagSymbol1 = flagSymbols[s1]!
        const transform0 = getTransformIndex(
          flagSymbol0,
          flagSymbol1.data.parent_type
        )
        const transform1 = getTransformIndex(
          flagSymbol1,
          flagSymbol0.data.parent_type
        )

        if (transform0 < 0 || transform1 < 0) continue

        const matchingCharacteristic1 = matchCharacteristic(flagSymbol1)

        if (matchingCharacteristic1 > 0) {
          const combinedValue =
            matchingCharacteristic0 + matchingCharacteristic1
          if (combinedValue > maxValue) {
            symbol0 = {
              parent_type: flagSymbol0.data.parent_type,
              transform: flagSymbol0.data.transforms[transform0]!
            }
            symbol1 = {
              parent_type: flagSymbol1.data.parent_type,
              transform: flagSymbol1.data.transforms[transform1]!
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
    return [symbol1, symbol0] as const
  } else {
    return [symbol0, symbol1] as const
  }
})

const generatedFlagShape = computed(() => {
  let flagFound = -1
  let flagValue = [0, 0, 0]
  let flagColor = 0
  const numColors = generatedFlagColors.value.length
  for (let i = 0; i < flagShapes.length; i++) {
    const flagShape = flagShapes[i]!
    if (flagShape.numColors > numColors) continue

    const condValue = [0, 0, 0]
    let accepted = true

    let j = -1
    for (const axisName in flagShape.cond) {
      j++
      const value = axesValues.value[axisName]

      if (typeof value === 'number') {
        if (
          flagShape.cond[axisName] &&
          (value < flagShape.cond[axisName].vmin ||
            value > flagShape.cond[axisName].vmax)
        ) {
          accepted = false
          break
        }
        if (j < 3) condValue[j] = value
      }
    }

    if (!accepted) continue

    if (
      accepted &&
      flagColor <= flagShape.numColors &&
      condValue.length >= 3 &&
      flagValue.length >= 3
    ) {
      if (
        flagShape.numColors > flagColor ||
        condValue[0]! > flagValue[0]! ||
        (condValue[0] == flagValue[0] &&
          (condValue[1]! > flagValue[1]! ||
            (condValue[1] == flagValue[1] && condValue[2]! > flagValue[2]!)))
      ) {
        flagColor = flagShape.numColors
        flagValue = [...condValue]
        flagFound = i
      }
    }
  }

  return flagFound
})
</script>
