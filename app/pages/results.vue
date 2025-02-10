<template>
  <div>
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
