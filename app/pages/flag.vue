<template>
  <div
    class="flex items-center justify-center flex-col mt-10 gap-10 max-w-xl mx-auto"
  >
    <Flag :axes="axesValues" v-if="axesValues != null" />
    <p>{{ axesValues }}</p>
  </div>
</template>

<script lang="ts" setup>
import { axes } from '~/utils/constants'
import type { AxisValues } from '~/utils/constants'

const route = useRoute()

const axesValuesLegacyUrl = computed<AxisValues | null>(() => {
  const params = route.query.results
  // if (!params || typeof params !== 'string') return null

  try {
    const decoded = atob(String(params))
    const pairs = decoded.split('&')

    const pairsDict: Record<string, string> = pairs.reduce((acc, pair) => {
      const [key, value] = pair.split('=')
      if (!key || !value) return acc
      return { ...acc, [key]: value }
    }, {})

    if (Object.keys(pairsDict).length < 1) return null

    // We convert the legacy keys to the new keys (e.g "j0" to "rehabilitative_justice")
    let retAxesValues = {}
    axes.map((axis) => {
      const value = parseInt(pairsDict[axis.legacyKey]) / 100
      if (value) {
        retAxesValues = { ...retAxesValues, [axis.key]: value }
      }
    })
    return retAxesValues
  } catch (e) {
    return null
  }
})

const axesValues = computed<AxisValues | null>(() => {
  return axesValuesLegacyUrl.value
})
</script>

<style></style>
