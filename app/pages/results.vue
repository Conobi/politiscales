<template>
  <div>
    <!-- Hidden canvases for generation -->
    <canvas ref="flagCanvas" width="512" height="256"></canvas>
    <canvas
      ref="resultsCanvas"
      width="800"
      height="1000"
      class="hidden"
    ></canvas>

    <!-- Visible results display -->
    <div class="max-w-4xl mx-auto p-4">
      <!-- Results URL for sharing -->
      <div class="mb-4 p-4 bg-gray-100 rounded-lg">
        <p id="urlToCopy" class="break-all">{{ resultsUrl }}</p>
      </div>

      <!-- Share buttons -->
      <div class="flex gap-4 mb-8">
        <UButton
          @click="shareResults"
          icon="i-heroicons-share"
          class="flex items-center gap-2"
        >
          Share Results
        </UButton>
        <UButton
          @click="downloadImage"
          icon="i-heroicons-arrow-down-tray"
          class="flex items-center gap-2"
        >
          Download Image
        </UButton>
      </div>

      <!-- Preview of generated images -->
      <div class="space-y-8">
        <img
          :src="flagDataUrl"
          alt="Generated Flag"
          class="w-full max-w-xl mx-auto"
          v-if="flagDataUrl"
        />
        <img
          :src="resultsDataUrl"
          alt="Results Summary"
          class="w-full"
          v-if="resultsDataUrl"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { flagColors } from '~/utils/constants'

// Canvas references
const flagCanvas = ref<HTMLCanvasElement | null>(null)
const resultsCanvas = ref<HTMLCanvasElement | null>(null)

// Generated image data URLs
const flagDataUrl = ref<string>('')
const resultsDataUrl = ref<string>('')

// URL for sharing
const resultsUrl = ref<string>('')

// Route for getting URL parameters
const route = useRoute()

// Types for our data structures
interface AxisData {
  [key: string]: {
    negative: number
    positive: number
    neutral: number
  }
}

interface BonusData {
  [key: string]: number
}

// Initialize our data structure
const axesData = ref<AxisData>({})
const bonusData = ref<BonusData>({})

// Constants
const AXES_CONFIG = [
  {
    key: 'c',
    color0: '#a425b6',
    color1: '#34b634',
    name0: 'constructivism',
    name1: 'essentialism'
  },
  {
    key: 'j',
    color0: '#14bee1',
    color1: '#e6cc27',
    name0: 'rehabilitative_justice',
    name1: 'punitive_justice'
  },
  {
    key: 's',
    color0: '#850083',
    color1: '#970000',
    name0: 'progressive',
    name1: 'conservative'
  },
  {
    key: 'b',
    color0: '#3e6ffd',
    color1: '#ff8500',
    name0: 'internationalism',
    name1: 'nationalism'
  },
  {
    key: 'p',
    color0: '#cc0000',
    color1: '#ffb800',
    name0: 'communism',
    name1: 'capitalism'
  },
  {
    key: 'm',
    color0: '#269B32',
    color1: '#6608C0',
    name0: 'regulation',
    name1: 'laissez_faire'
  },
  {
    key: 'e',
    color0: '#a0e90d',
    color1: '#4deae9',
    name0: 'ecology',
    name1: 'production'
  },
  {
    key: 't',
    color0: '#eb1a66',
    color1: '#0ee4c8',
    name0: 'revolution',
    name1: 'reform'
  }
]

const BONUS_THRESHOLDS = {
  anar: 0.9,
  prag: 0.5,
  femi: 0.9,
  comp: 0.9,
  vega: 0.5,
  mona: 0.5,
  reli: 0.5
}

var axes = ['c', 'b', 'p', 'm', 's', 'j', 'e', 't']

var bonus = {
  anar: 0.9,
  prag: 0.5,
  femi: 0.9,
  comp: 0.9,
  vega: 0.5,
  reli: 0.5,
  mona: 0.5
}

var characteristics = []

var axesValues = {
  c: 0,
  b: 0,
  p: 0,
  m: 0,
  s: 0,
  j: 0,
  e: 0,
  t: 0
}

var left = 0
var right = 0

const initCharacteristics = () => {
  var left = 0
  var right = 0

  for (var i = 0; i < axes.length; i++) {
    var negativeValue = getQueryVariable(axes[i] + '0')
    var positiveValue = getQueryVariable(axes[i] + '1')
    setAxisValue(axes[i] + 'AxisNeg', negativeValue)
    setAxisValue(axes[i] + 'AxisPos', positiveValue)
    setAxisValue(axes[i] + 'AxisMid', 1 - negativeValue - positiveValue)

    left += negativeValue
    right += positiveValue

    if (negativeValue > positiveValue) {
      characteristics.push({ name: axes[i] + '0', value: negativeValue })
    } else {
      characteristics.push({ name: axes[i] + '1', value: positiveValue })
    }

    axesValues[axes[i]] = positiveValue - negativeValue
  }

  for (var b in bonus) {
    var value = getQueryVariable(b)

    setBonus(b + 'Bonus', value, bonus[b])

    if (value > bonus[b]) {
      bonusEnabled = 1
      characteristics.push({ name: b, value: value })
    }
  }

  characteristics.sort(function (a, b) {
    return a.value < b.value
  })
}

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

// Parse URL parameters
const parseUrlParams = () => {
  const params = route.query.results
  if (!params || typeof params !== 'string') return

  try {
    const decoded = atob(params)
    const pairs = decoded.split('&')

    console.log('Decoded URL parameters:', pairs)

    pairs.forEach((pair) => {
      const [key, value] = pair.split('=')
      if (!key || !value) return
      const numValue = parseInt(value) / 100
      if (key.length === 2) {
        // Axis value
        const axisKey = key[0]
        if (!axisKey) return
        const isPositive = key[1] === '1'

        if (!axesData.value[axisKey]) {
          axesData.value[axisKey] = {
            negative: 0,
            positive: 0,
            neutral: 1
          }
        }

        if (isPositive) {
          axesData.value[axisKey].positive = numValue
        } else {
          axesData.value[axisKey].negative = numValue
        }

        axesData.value[axisKey].neutral =
          1 -
          axesData.value[axisKey].positive -
          axesData.value[axisKey].negative
      } else {
        // Bonus value
        bonusData.value[key] = numValue
      }
    })
  } catch (e) {
    console.error('Error parsing URL parameters:', e)
  }
}

function getCharacteristic(name, vmin, vmax) {
  for (var k = 0; k < characteristics.length; k++) {
    if (characteristics[k].name != name) continue

    if (characteristics[k].value >= vmin && characteristics[k].value <= vmax)
      return characteristics[k].value
    else return -1.0
  }

  return -1.0
}

function findFlagColors() {
  let colors = []

  for (let i = 0; i < flagColors.length; i++) {
    let accepted = 1

    let mainValue = 0
    let mainValueFound = 0

    for (let j = 0; j < flagColors[i].cond.length; j++) {
      let charFound = 0
      for (let k = 0; k < characteristics.length; k++) {
        if (characteristics[k].name == flagColors[i].cond[j].name) {
          charFound = 1
          if (
            characteristics[k].value < flagColors[i].cond[j].vmin ||
            characteristics[k].value > flagColors[i].cond[j].vmax
          )
            accepted = 0
          else if (!mainValueFound) {
            mainValueFound = 1
            mainValue = characteristics[k].value
          }

          break
        }
      }

      if (!charFound) accepted = 0

      if (!accepted) break
    }

    if (accepted) {
      colors.push({
        bgColor: flagColors[i].bgColor,
        fgColor: flagColors[i].fgColor,
        value: mainValue
      })
    }
  }

  colors.sort(function (a, b) {
    return b.value - a.value
  })

  return colors
}

function findFlagShape(numColors) {
  var flagFound = -1
  var flagValue = [0, 0, 0]
  var flagColor = 0

  for (var i = 0; i < flagShapes.length; i++) {
    console.log(flagShapes[i].numColors, numColors)
    if (flagShapes[i].numColors > numColors) continue

    var condValue = [0, 0]
    var accepted = 1
    if (flagShapes[i].cond.length > 0) {
      for (var j = 0; j < flagShapes[i].cond.length; j++) {
        var value = axesValues[flagShapes[i].cond[j].name]
        if (
          value < flagShapes[i].cond[j].vmin ||
          value > flagShapes[i].cond[j].vmax
        ) {
          accepted = 0
        }
        if (j < 3) condValue[j] = Math.abs(value)

        if (!accepted) break
      }
    } else {
      var condValue = [0, 0]
    }

    if (accepted && flagColor <= flagShapes[i].numColors) {
      if (flagShapes[i].numColors > flagColor) {
        flagColor = flagShapes[i].numColors
        flagValue[0] = condValue[0]
        flagValue[1] = condValue[1]
        flagValue[2] = condValue[2]
        flagFound = i
      } else if (condValue[0] > flagValue[0]) {
        flagColor = flagShapes[i].numColors
        flagValue[0] = condValue[0]
        flagValue[1] = condValue[1]
        flagValue[2] = condValue[2]
        flagFound = i
      } else if (condValue[0] == flagValue[0]) {
        if (condValue[1] > flagValue[1]) {
          flagColor = flagShapes[i].numColors
          flagValue[0] = condValue[0]
          flagValue[1] = condValue[1]
          flagValue[2] = condValue[2]
          flagFound = i
        } else if (condValue[1] == flagValue[1]) {
          if (condValue[2] > flagValue[2]) {
            flagColor = flagShapes[i].numColors
            flagValue[0] = condValue[0]
            flagValue[1] = condValue[1]
            flagValue[2] = condValue[2]
            flagFound = i
          }
        }
      }
    }
  }

  return flagFound
}

function findFlagSymbol(numColors) {
  var symbol0 = {
    parent_type: 'none',
    transform: {}
  }
  var symbol1 = {
    parent_type: 'none',
    transform: {}
  }
  var valueMax = 0

  if (numColors == 0) {
    symbol0.parent_type = 'dot'
    symbol0.transform = {
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

  for (var s0 = 0; s0 < flagSymbols.length; s0++) {
    var charVal0 = getCharacteristic(
      flagSymbols[s0].cond.name,
      flagSymbols[s0].cond.vmin,
      flagSymbols[s0].cond.vmax
    )
    if (charVal0 > 0) {
      var value = charVal0 * 1.5
      var transform0 = -1
      if (value > valueMax) {
        for (k0 = 0; k0 < flagSymbols[s0].data.transforms.length; k0++) {
          if (flagSymbols[s0].data.transforms[k0].child_type == 'none') {
            transform0 = k0
          }
        }

        if (transform0 >= 0) {
          symbol0.parent_type = flagSymbols[s0].data.parent_type
          symbol0.transform = flagSymbols[s0].data.transforms[transform0]
          symbol1.parent_type = 'none'
          valueMax = value
        }
      }

      for (var s1 = s0 + 1; s1 < flagSymbols.length; s1++) {
        transform0 = -1
        var transform1 = -1
        var k0 = -1
        for (k0 = 0; k0 < flagSymbols[s0].data.transforms.length; k0++) {
          for (var k1 = 0; k1 < flagSymbols[s1].data.transforms.length; k1++) {
            if (
              flagSymbols[s0].data.parent_type ==
                flagSymbols[s1].data.transforms[k1].child_type &&
              flagSymbols[s1].data.parent_type ==
                flagSymbols[s0].data.transforms[k0].child_type
            ) {
              transform0 = k0
              transform1 = k1
            }
          }
        }

        if (transform1 < 0 || transform0 < 0) continue

        var charVal1 = getCharacteristic(
          flagSymbols[s1].cond.name,
          flagSymbols[s1].cond.vmin,
          flagSymbols[s1].cond.vmax
        )
        if (charVal1 > 0) {
          value = charVal0 + charVal1
          if (value > valueMax) {
            symbol0.parent_type = flagSymbols[s0].data.parent_type
            symbol0.transform = flagSymbols[s0].data.transforms[transform0]
            symbol1.parent_type = flagSymbols[s1].data.parent_type
            symbol1.transform = flagSymbols[s1].data.transforms[transform1]
            valueMax = value
          }
        }
      }
    }
  }

  if (
    symbol0.parent_type != 'none' &&
    symbol1.parent_type != 'none' &&
    symbol1.transform.main &&
    !symbol0.transform.main
  )
    return [symbol1, symbol0]
  else return [symbol0, symbol1]
}

// Draw flag on canvas
const drawFlag = (images: Record<string, HTMLImageElement>) => {
  if (!flagCanvas.value) return

  const ctx = flagCanvas.value.getContext('2d')
  if (!ctx) return

  var spriteX = 256
  var spriteY = 128
  var spriteS = 1.0

  const colors = findFlagColors()
  var flagId = findFlagShape(colors.length)
  var symbolData = findFlagSymbol(colors.length)

  console.log(flagId, 'flagid')
  if (colors.length <= 0)
    colors.push({ bgColor: '#ffffff', fgColor: '#000000' })

  if (flagId < 0) {
    ctx.beginPath()
    ctx.rect(0, 0, 512, 256)
    ctx.fillStyle = '#ffffff'
    ctx.fill()
  } else {
    for (var i = 0; i < flagShapes[flagId].shapes.length; i++) {
      var path = flagShapes[flagId].shapes[i]
      var numPoints = path.length / 2

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
        for (var j = 1; j < numPoints; j++) {
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
    var tmpC = document.createElement('canvas')
    tmpC.width = images['sprites'].width
    tmpC.height = images['sprites'].height
    var tmpCtx = tmpC.getContext('2d')
    var coloredSprites = tmpCtx.getImageData(0, 0, tmpC.width, tmpC.height)

    tmpCtx.beginPath()
    tmpCtx.rect(0, 0, tmpC.width, tmpC.height)
    tmpCtx.fillStyle = colors[0].fgColor
    tmpCtx.fill()

    tmpCtx.globalCompositeOperation = 'destination-in'
    tmpCtx.drawImage(images['sprites'], 0, 0)

    ctx.save()
    ctx.translate(spriteX, spriteY)
    ctx.scale(spriteS, spriteS)

    var sx = symbolData[0].transform.x
    var sy = symbolData[0].transform.y

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
      var sx = symbolData[1].transform.x
      var sy = symbolData[1].transform.y

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

// Draw results on canvas
const drawResults = (images: Record<string, HTMLImageElement>) => {
  if (!resultsCanvas.value) return

  const ctx = resultsCanvas.value.getContext('2d')
  if (!ctx) return

  // Clear canvas
  ctx.fillStyle = '#ebebeb'
  ctx.fillRect(0, 0, resultsCanvas.value.width, resultsCanvas.value.height)

  // Draw header
  ctx.fillStyle = '#500076'
  ctx.fillRect(0, 0, resultsCanvas.value.width, 42)

  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 25px sans-serif'
  ctx.textAlign = 'left'
  ctx.fillText('PolitiScales', 10, 30)

  // Draw axes
  let yPos = 180
  AXES_CONFIG.forEach((axis) => {
    const axisData = axesData.value[axis.key]
    if (!axisData) return

    // Draw axis background
    ctx.fillStyle = '#f0f0f0'
    ctx.fillRect(100, yPos, 600, 30)

    // Draw negative value
    ctx.fillStyle = axis.color0
    const negWidth = axisData.negative * 600
    ctx.fillRect(100, yPos, negWidth, 30)

    // Draw positive value
    ctx.fillStyle = axis.color1
    const posWidth = axisData.positive * 600
    ctx.fillRect(700 - posWidth, yPos, posWidth, 30)

    // Draw labels
    ctx.fillStyle = '#000000'
    ctx.font = '16px sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText(axis.name0, 90, yPos + 20)
    ctx.textAlign = 'left'
    ctx.fillText(axis.name1, 710, yPos + 20)

    yPos += 60
  })

  // Store the result
  resultsDataUrl.value = resultsCanvas.value.toDataURL()
}

// Share results
const shareResults = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'My PolitiScales Results',
        url: resultsUrl.value
      })
    } catch (err) {
      console.error('Error sharing:', err)
    }
  } else {
    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(resultsUrl.value)
      // You might want to add a toast notification here
    } catch (err) {
      console.error('Error copying to clipboard:', err)
    }
  }
}

// Download image
const downloadImage = () => {
  if (!resultsDataUrl.value) return

  const link = document.createElement('a')
  link.download = `PolitiScales_Results_${new Date().toLocaleDateString()}.png`
  link.href = resultsDataUrl.value
  link.click()
}

// Initialize everything
onMounted(async () => {
  parseUrlParams()
  const images = await loadImages()
  drawFlag(images)
  drawResults(images)

  // Set results URL
  resultsUrl.value = window.location.href
})
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
