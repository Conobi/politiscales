<template>
  <div
    v-if="userAxes"
    class="flex items-center justify-center flex-col mt-10 gap-10"
  >
    <div @click="randomizeAxes">
      <ResultsFlag :axes="userAxes" />
    </div>
    <ResultsTester v-model="userAxes" />
  </div>
</template>

<script lang="ts" setup>
const initUserAxes = axesKeys.reduce<AxisValues>((acc, key) => {
  return { ...acc, [key]: 0.5 }
}, {})

const userAxes = ref<AxisValues>(initUserAxes)

function randomizeAxes() {
  const axisValues: AxisValues = {}

  // Assign random values to paired axes
  for (const { left, right } of pairedAxesByPair) {
    const valueA = Math.random()
    const valueB = Math.random() * (1 - valueA)
    axisValues[left] = valueA
    axisValues[right] = valueB
  }

  // Assign random values to unpaired axes
  for (const unpairedAxis of unpairedAxesKeys) {
    axisValues[unpairedAxis] = Math.random()
  }

  userAxes.value = axisValues
}
</script>

<style></style>
