<template>
  <div class="w-2xl grid grid-cols-2 gap-4">
    <template v-if="userAxes">
      <div
        v-for="(axis, index) in Object.keys(axes) as (keyof typeof axes)[]"
        :key="axis"
        :class="{ 'col-span-2': !('pair' in axes[axis]) }"
      >
        <UFormField
          size="xl"
          :ui="{ label: 'capitalize' }"
          :label="`${axis} (${(userAxes[axis]! * 100).toFixed(0)} %)`"
        >
          <USlider
            :id="axis"
            v-model="userAxes[axis]!"
            :min="0"
            :max="1"
            :step="0.01"
            color="neutral"
            :inverted="index % 2 !== 0 && 'pair' in axes[axis]"
            :style="{
              '--ui-bg-inverted': 'color' in axes[axis] ? axes[axis].color : ''
            }"
            :ui="{}"
          />
        </UFormField>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const userAxes = defineModel<AxisValues>({ required: true })
</script>
