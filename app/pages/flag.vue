<template>
  <div
    class="flex items-center justify-center flex-col mt-10 gap-10 max-w-xl mx-auto"
  >
    <!-- <Flag :axes="axes" /> -->
    <p>{{ axesValuesLegacyUrl }}</p>
    <p>{{ foundflagColors }}</p>
  </div>
</template>

<script lang="ts" setup>
import { axes, flagColors, flagShapes } from '~/utils/constants'

const route = useRoute()

interface AxisValues {
  [key: string]: number
}

const axesValuesLegacyUrl = computed<AxisValues | null>(() => {
  const params = route.query.results
  // if (!params || typeof params !== 'string') return null

  try {
    const decoded = atob(params)
    const pairs = decoded.split('&')

    const pairsDict: Record<string, string> = pairs.reduce((acc, pair) => {
      const [key, value] = pair.split('=')
      if (!key || !value) return acc
      return { ...acc, [key]: value }
    }, {})

    if (Object.keys(pairsDict).length < 1) return null

    // We convert the legacy keys to the new keys (e.g "j0" to "rehabilitative_justice")

    let axesValues = {}
    axes.map((axis) => {
      const value = parseInt(pairsDict[axis.legacyKey]) / 100
      if (value) {
        axesValues = { ...axesValues, [axis.key]: value }
      }
    })
    return axesValues
  } catch (e) {
    return null
  }
})

interface FlagColor {
  bgColor: string
  fgColor: string
  value: number
}

const foundflagColors = computed(() => {
  const colors: FlagColor[] = []

  if (!axesValuesLegacyUrl.value) return colors
  flagColors.forEach((flagColor) => {
    Object.entries(axesValuesLegacyUrl.value).forEach(
      ([axis, axisPercentage]) => {
        if (axis in flagColor.cond) {
          if (
            axisPercentage > flagColor.cond[axis].vmin ||
            axisPercentage < flagColor.cond[axis].vmax
          ) {
            colors.push({
              bgColor: flagColor.bgColor,
              fgColor: flagColor.fgColor,
              value: axisPercentage
            })
          }
        }
      }
    )
  })

  colors.sort(function (a, b) {
    return b.value - a.value
  })

  return colors
})
</script>

<style></style>
