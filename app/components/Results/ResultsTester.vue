<template>
  <div v-if="userAxes" class="w-2xl">
    <div v-for="(row, index) in rows" :key="row.name">
      <UFormField
        v-if="row.type === 'paired'"
        size="xl"
        :ui="{ label: 'capitalize' }"
        :label="getPairedLabel(row)"
      >
        <USlider
          :id="row.name"
          class="paired-slider"
          :modelValue="[userAxes[row.left]!, 1 - userAxes[row.right]!]"
          @update:modelValue="(v) => setAxesValue(row, v)"
          :min="0"
          :max="1"
          :step="0.01"
          color="neutral"
          :style="{
            '--min-color': pairedAxes[row.left].color,
            '--max-color': pairedAxes[row.right].color
          }"
        />
      </UFormField>

      <UFormField
        v-else
        size="xl"
        :ui="{ label: 'capitalize' }"
        :label="`${row.name} ${Math.round((userAxes[row.name] ?? 0) * 100)} %)`"
      >
        <USlider
          :id="row.name"
          v-model="userAxes[row.name]!"
          :min="0"
          :max="1"
          :step="0.01"
          color="neutral"
        />
      </UFormField>
    </div>
  </div>
</template>

<script lang="ts" setup>
const userAxes = defineModel<AxisValues>({ required: true })

const rows = [
  ...pairedAxesByPair.map((v) => ({ type: 'paired' as const, ...v })),
  ...unpairedAxesKeys.map((key) => ({
    type: 'unpaired' as const,
    name: key,
    ...unpairedAxes[key]
  }))
]

function getPairedLabel(row: PairedAxisByPair) {
  const leftValue = Math.round(userAxes.value[row.left]! * 100)
  const rightValue = Math.round(userAxes.value[row.right]! * 100)
  return `${row.name} (${leftValue} % ${row.left} / ${rightValue} % ${row.right})`
}

function setAxesValue(row: PairedAxisByPair, value: number | number[]) {
  if (!Array.isArray(value) || value.length !== 2)
    throw new Error(`Invalid value ${value}`)

  userAxes.value[row.left] = value[0]!
  userAxes.value[row.right] = 1 - value[1]!
}
</script>

<style scoped>
.paired-slider :deep(div[role='slider']) {
  &[aria-label='Minimum'] {
    background: var(--min-color);
  }

  &[aria-label='Maximum'] {
    background: var(--max-color);
  }
}
</style>
