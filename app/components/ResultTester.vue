<template>
  <div class="w-2xl grid grid-cols-2 gap-4">
    <div
      v-for="(axis, index) in Object.keys(userAxes)"
      :key="axis"
      :class="{ 'col-span-2': !axes[axis]?.pair }"
      v-if="userAxes"
    >
      <UFormField
        size="xl"
        :ui="{ label: 'capitalize' }"
        :label="`${axis} (${(userAxes[axis] * 100).toFixed(0)} %)`"
      >
        <USlider
          :id="axis"
          :min="0"
          :max="1"
          :step="0.01"
          color="neutral"
          :inverted="index % 2 !== 0 && typeof axes[axis]?.pair === 'string'"
          :style="{ '--ui-bg-inverted': axes[axis]?.color }"
          :ui="{}"
          v-model="userAxes[axis]"
        />
      </UFormField>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { axes } from '~/utils/constants'

const userAxes = defineModel<AxisValues>({ required: true })
</script>

<style></style>
