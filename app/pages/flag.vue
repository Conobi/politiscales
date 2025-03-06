<template>
  <div v-if="userAxes" class="flex items-center justify-center flex-col">
    <ResultsFlag
      :axes="userAxes"
      :force-flag-shape="forcedFlagShapeIndex"
      @click="randomizeAxes"
      class="cursor-pointer"
    />
    <ResultsTester
      v-model:user-axes="userAxes"
      v-model:force-flag-shape-index="forceFlagShapeIndex"
      class="mt-10"
    />
  </div>
</template>

<script lang="ts" setup>
const initUserAxes = pairedAxesByPair.reduce<AxisValues>((acc, pair) => {
  acc[pair.left] = 0.3
  acc[pair.right] = 0.3

  return acc
}, {})

const forceFlagShapeIndex = ref(-1)
const userAxes = ref<AxisValues>(initUserAxes)

const forcedFlagShapeIndex = computed(() => {
  if (forceFlagShapeIndex.value === -1) {
    return undefined
  }

  return forceFlagShapeIndex.value
})

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
    const rdm = Math.random()
    axisValues[unpairedAxis] = rdm >= 0.66 ? 1 : rdm <= 0.33 ? 0 : 0.66
  }

  userAxes.value = axisValues
}
</script>
