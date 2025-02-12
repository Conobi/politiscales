<template>
  <svg
    class="max-w-[800px] mx-auto bg-gray-100"
    :height="totalHeight"
    :viewBox="`0 0 800 ${totalHeight}`"
  >
    <!-- Add the flag at the top of the SVG -->
    <foreignObject
      :x="800 / 2 - 512 * 0.25"
      y="150"
      width="512"
      height="256"
      transform="scale(0.75)"
    >
      <ResultsFlag
        v-if="$props.axes"
        :axes="$props.axes"
        width="512"
        height="256"
      />
    </foreignObject>

    <!-- For each axis pair -->
    <g
      v-for="(pair, index) in axesPairs"
      :key="pair.name"
      :transform="`translate(0, ${450 + index * (barHeight + axisSpacing)})`"
    >
      <!-- Bar group - moved left to make room for icons -->
      <g :transform="`translate(150, 0)`" width="100%">
        <!-- First axis -->
        <rect
          x="0"
          y="0"
          :width="`${(pair.value1 / 100) * barWidth}`"
          :height="barHeight"
          :fill="axes[pair.axis1].color"
        />
        <text
          v-if="(pair.value1 / 100) * barWidth > 40"
          :x="`${((pair.value1 / 100) * barWidth) / 2}`"
          :y="barHeight / 2"
          text-anchor="middle"
          dominant-baseline="middle"
          class="text-sm fill-white"
        >
          {{ Math.round(pair.value1) }}%
        </text>

        <!-- Neutral value -->
        <rect
          :x="`${(pair.value1 / 100) * barWidth}`"
          y="0"
          :width="`${(pair.neutral / 100) * barWidth}`"
          :height="barHeight"
          fill="#FFFFFF"
        />
        <text
          v-if="(pair.neutral / 100) * barWidth > 40"
          :x="`${(pair.value1 / 100) * barWidth + ((pair.neutral / 100) * barWidth) / 2}`"
          :y="barHeight / 2"
          text-anchor="middle"
          dominant-baseline="middle"
          class="text-sm fill-gray-500"
        >
          {{ Math.round(pair.neutral) }}%
        </text>

        <!-- Second axis -->
        <rect
          :x="`${((pair.value1 + pair.neutral) / 100) * barWidth}`"
          y="0"
          :width="`${(pair.value2 / 100) * barWidth}`"
          :height="barHeight"
          :fill="axes[pair.axis2].color"
        />
        <text
          v-if="(pair.value2 / 100) * barWidth > 40"
          :x="`${((pair.value1 + pair.neutral) / 100) * barWidth + ((pair.value2 / 100) * barWidth) / 2}`"
          :y="barHeight / 2"
          text-anchor="middle"
          dominant-baseline="middle"
          class="text-sm fill-white"
        >
          {{ Math.round(pair.value2) }}%
        </text>

        <!-- Icons -->
        <image
          :href="`/images/${pair.axis1}_small.png`"
          :x="-iconSize * 0.8"
          :y="iconSize * -0.25"
          :width="iconSize"
          :height="iconSize"
        />
        <image
          :href="`/images/${pair.axis2}_small.png`"
          :x="barWidth - iconSize * 0.2"
          :y="iconSize * -0.25"
          :width="iconSize"
          :height="iconSize"
        />
        <!-- Axis names -->
        <text
          :x="iconSize * 0.2 - 10"
          :y="-barHeight / 1.5"
          z="0"
          text-anchor="start"
          dominant-baseline="middle"
          class="text-lg font-serif"
        >
          {{ $t(`axes.${pair.axis1}`) }}
        </text>
        <text
          :x="barWidth + iconSize * 0.2 - 10"
          :y="-barHeight / 1.5"
          z="0"
          text-anchor="end"
          dominant-baseline="middle"
          class="text-lg font-serif"
        >
          {{ $t(`axes.${pair.axis2}`) }}
        </text>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { axes } from '~/utils/constants'
import type { AxisValues } from '~/utils/constants'

const props = defineProps<{
  axes: AxisValues
}>()

// Constants for SVG layout
const barHeight = 28
const barWidth = 500
const iconSize = 76
const axisHeight = 80
const axisSpacing = 80

const flagComponent = ref<InstanceType<typeof ResultsFlag> | null>(null)
const flagCanvas = ref<HTMLCanvasElement | null>(null)

const axesPairs = computed(() => {
  const pairs: { [key: string]: string[] } = {}

  // Group axes by pairs
  Object.entries(axes)
    .filter(([axisKey]) => props.axes[axisKey] != null)
    .forEach(([axisKey, axis]) => {
      if (axis.pair) {
        if (!pairs[axis.pair]) {
          pairs[axis.pair] = []
        }
        pairs[axis.pair].push(axisKey)
      }
    })

  // Calculate values for each pair
  return Object.entries(pairs).map(([pairName, pairAxes]) => {
    const [axis1, axis2] = pairAxes
    const value1 = props.axes[axis1] || 0
    const value2 = props.axes[axis2] || 0
    const neutral = Math.max(0, 100 - value1 - value2)

    return {
      name: pairName,
      axis1,
      axis2,
      value1,
      value2,
      neutral
    }
  })
})
// Watch for the flag component to be ready and copy its canvas content
watchEffect(() => {
  if (flagComponent.value?.flagCanvas && flagCanvas.value) {
    const ctx = flagCanvas.value.getContext('2d')
    if (ctx) {
      ctx.drawImage(flagComponent.value.flagCanvas, 0, 0)
    }
  }
})

const totalHeight = computed(() => {
  return axesPairs.value.length * (axisHeight + axisSpacing / 2) + 456 // 356 (flag height + padding) + 100 (original padding)
})
</script>

<style scoped>
svg rect {
  transition: all 0.3s ease;
}

text {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

/* Add a subtle drop shadow to make text more readable over icons */
text {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
</style>
