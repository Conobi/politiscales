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
        :width="512"
        :height="256"
      />
    </foreignObject>

    <!-- Slogan -->
    <text
      x="400"
      y="360"
      text-anchor="middle"
      dominant-baseline="middle"
      class="text-lg font-serif"
    >
      {{ generatedSlogan }}
    </text>

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
          :fill="pair.fill1"
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
          :fill="pair.fill2"
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

    <!-- Unpaired axes badges -->
    <g
      v-for="(badge, index) in unpairedAxesBadges"
      :key="badge.name"
      :transform="`translate(${800 / 2 - ((iconSize + badgeSpacing) * unpairedAxesBadges.length) / 2 + index * (iconSize + badgeSpacing)}, ${350 + axesPairs.length * (barHeight + axisSpacing) + badgeHeight})`"
    >
      <image
        :href="`/images/${badge.name}_small.png`"
        :x="0"
        y="0"
        :width="iconSize"
        :height="iconSize"
      />
      <text
        :x="iconSize / 2"
        :y="iconSize + 10"
        text-anchor="middle"
        dominant-baseline="middle"
        class="text-sm fill-black"
      >
        {{ $t(`axes.${badge.name}`) }}
      </text>
    </g>
  </svg>
</template>

<script setup lang="ts">
const { t } = useI18n()
const props = defineProps<{
  axes: AxisValues
}>()

// Constants for SVG layout
const barHeight = 28
const barWidth = 500
const iconSize = 76
const axisHeight = 80
const axisSpacing = 80
const badgeHeight = 100
const badgeSpacing = 50

const axesPairs = computed(() => {
  const pairs: { [key: string]: (keyof typeof axes)[] } = {}

  // Group axes by pairs
  Object.entries(axes)
    .filter(([axisKey]) => props.axes[axisKey] != null)
    .forEach(([axisKey, axis]) => {
      if ('pair' in axis) {
        if (axis.pair) {
          if (!(axis.pair in pairs)) {
            pairs[axis.pair] = []
          }
          pairs[axis.pair]!.push(axisKey as keyof typeof axes)
        }
      }
    })

  // Calculate values for each pair
  return Object.entries(pairs).map(([pairName, pairAxes]) => {
    const [axis1, axis2] = pairAxes
    const value1 = (axis1 && props.axes[axis1]) || 0
    const value2 = (axis2 && props.axes[axis2]) || 0
    const neutral = Math.max(0, 100 - value1 - value2)
    const axe1 = (axis1 && axes[axis1]) || null
    const axe2 = (axis2 && axes[axis2]) || null

    return {
      name: pairName,
      fill1: (axe1 && 'color' in axe1 && axe1.color) || '',
      fill2: (axe2 && 'color' in axe2 && axe2.color) || '',
      axis1,
      axis2,
      value1,
      value2,
      neutral
    }
  })
})

const characteristics = computed(() => {
  return Object.entries(props.axes)
    .filter(([value]) => value !== null)
    .map(([key, value]) => ({
      name: key as keyof typeof charSlogan,
      value: value
    }))
    .sort((a, b) => (b.value || 0) - (a.value || 0))
})

const generatedSlogan = computed(() => {
  let slogan = ''
  let counter = 0

  for (const characteristic of characteristics.value) {
    if (charSlogan[characteristic.name]) {
      if (slogan !== '') slogan += ' · '
      slogan += t(`slogans.${charSlogan[characteristic.name]}`)
      counter++

      if (counter >= 3) break
    }
  }

  return slogan
})

const unpairedAxesBadges = computed(() => {
  return Object.entries(props.axes)
    .filter(
      ([key, value]) =>
        value !== null &&
        value / 100 >= badgeThreshold[key as keyof typeof badgeThreshold] &&
        'pair' in axes[key as keyof typeof axes]
    )
    .map(([key, value]) => ({
      name: key,
      value: value
    }))
    .sort((a, b) => (b.value || 0) - (a.value || 0))
})

const totalHeight = computed(() => {
  return (
    axesPairs.value.length * (axisHeight + axisSpacing / 2) +
    (badgeHeight + badgeSpacing) +
    400
  )
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
