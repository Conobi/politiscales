<template>
  <div v-if="userAxes">
    <ResultsFlag :axes="userAxes" @click="randomizeAxes" class="m-auto" />
    <ResultsTester v-model="userAxes" class="mt-10 m-auto" />
  </div>
</template>

<script lang="ts" setup>
const initUserAxes = pairedAxesByPair.reduce<AxisValues>((acc, pair) => {
  acc[pair.left] = 0.3
  acc[pair.right] = 0.3

  return acc
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
