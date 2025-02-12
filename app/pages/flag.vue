<template>
  <div class="flex items-center justify-center flex-col mt-10 gap-10">
    <template v-if="userAxes">
      <div @click="randomizeAxes">
        <Flag :axes="userAxes" class="cursor-pointer" />
      </div>
      <ResultTester v-model="userAxes" />
    </template>
    <!-- <p>{{ userAxes }}</p> -->
  </div>
</template>

<script lang="ts" setup>
import { axes } from '~/utils/constants'
import type { AxisValues } from '~/utils/constants'
import { onMounted } from 'vue'

const route = useRoute()

const initUserAxes: AxisValues = {
  ...Object.keys(axes).reduce((acc, key) => {
    return { ...acc, [key]: 0.5 }
  }, {})
}

const userAxes = ref<AxisValues>(initUserAxes)

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
    const retAxesValues = {}
    Object.keys(axes).forEach((key) => {
      const axis = axes[key]
      const value = parseInt(pairsDict[axis.legacyKey]) / 100
      if (value) {
        retAxesValues[key] = value
      } else if (axis.legacyKey && axis.pair) retAxesValues[key] = 0
    })
    return retAxesValues
  } catch (e) {
    return null
  }
})

// function randomizeAxes() {
//   const newAxes = { ...userAxes.value }
//   Object.keys(newAxes).forEach((key) => {
//     newAxes[key] = Math.random()
//   })
//   userAxes.value = newAxes
// }

function randomizeAxes() {
  const axisValues: AxisValues = {}
  const pairedAxes: { [key: string]: string[] } = {}
  const unpairedAxes: string[] = []

  // Separate paired and unpaired axes
  for (const axis in axes) {
    if (axes[axis].pair) {
      if (!pairedAxes[axes[axis].pair]) {
        pairedAxes[axes[axis].pair] = []
      }
      pairedAxes[axes[axis].pair].push(axis)
    } else {
      unpairedAxes.push(axis)
    }
  }

  // Assign random values to paired axes
  for (const pair in pairedAxes) {
    const [axisA, axisB] = pairedAxes[pair]
    const valueA = Math.random()
    const valueB = Math.random() * (1 - valueA)
    axisValues[axisA] = valueA
    axisValues[axisB] = valueB
  }

  // Randomly select some unpaired axes and assign them random values
  const selectedUnpairedAxes = unpairedAxes.filter(() => Math.random() > 0.5)
  selectedUnpairedAxes.forEach((axis) => {
    axisValues[axis] = Math.random()
  })

  userAxes.value = axisValues
}

// If we have a legacy URL, we set the userAxes to the legacy values
onMounted(() => {
  if (axesValuesLegacyUrl.value) {
    userAxes.value = axesValuesLegacyUrl.value
  }
})
</script>

<style></style>
