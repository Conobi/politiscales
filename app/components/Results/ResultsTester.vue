<template>
  <div v-if="userAxes" class="w-2xl">
    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="(row, index) in rows"
        :key="row.name"
        :class="{ 'col-span-2': row.type === 'paired' }"
      >
        <UFormField
          v-if="row.type === 'paired'"
          class="col-span-2"
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
            :step="0.66"
            color="neutral"
          />
        </UFormField>
      </div>

      <UFormField
        class="col-span-2"
        size="xl"
        :ui="{ label: 'capitalize' }"
        :label="`Force flag shape (-1 to disable). Value: ${forceFlagShapeIndex}`"
      >
        <USlider
          id="forceFlag"
          v-model="forceFlagShapeIndex"
          :min="-1"
          :max="flagShapes.length - 1"
          :step="1"
        />
      </UFormField>
    </div>

    <ResultsTesterSampleBtn v-model="userAxes" class="mt-5" />
  </div>
</template>

<script lang="ts" setup>
const forceFlagShapeIndex = defineModel<number>('forceFlagShapeIndex', {
  required: true
})
const userAxes = defineModel<AxisValues>('userAxes', { required: true })

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
