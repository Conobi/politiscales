<template>
  <div>
    <UButton
      v-for="(value, key) in values"
      :label="key"
      @click="setSample(value)"
    />
  </div>
</template>

<script lang="ts" setup>
const userAxes = defineModel<AxisValues>({ required: true })

function setSample(sampleValues: AxisValues) {
  userAxes.value = { ...sampleValues }
}

const values = {
  true_communist: {
    constructivism: 0.86,
    essentialism: 0,
    rehabilitative_justice: 0.95,
    punitive_justice: 0,
    progressive: 0.81,
    conservative: 0.1,
    internationalism: 0.81,
    nationalism: 0.12,
    communism: 1,
    capitalism: 0,
    regulation: 0.86,
    laissez_faire: 0.07,
    ecology: 0.57,
    production: 0.12,
    revolution: 0.83,
    reform: 0.5,

    materialism: 0,
    idealism: 0,
    sustainability: 0,
    growth_at_all_costs: 0,
    anarchism: 0,
    pragmatism: 0,
    feminism: 0,
    complotism: 0,
    veganism: 0,
    monarchism: 0,
    religion: 0
  },

  true_woke: {
    constructivism: 0.98,
    essentialism: 0,
    rehabilitative_justice: 0.74,
    punitive_justice: 0.1,
    progressive: 0.9,
    conservative: 0.05,
    internationalism: 0.95,
    nationalism: 0,
    communism: 0.86,
    capitalism: 0,
    regulation: 0.83,
    laissez_faire: 0.07,
    ecology: 0.64,
    production: 0.24,
    revolution: 0.55,
    reform: 0.21,

    materialism: 0,
    idealism: 0,
    sustainability: 0,
    growth_at_all_costs: 0,
    anarchism: 1,
    pragmatism: 1,
    feminism: 1,
    complotism: 0,
    veganism: 1,
    monarchism: 0,
    religion: 0
  },

  leftist_centrist: {
    constructivism: 0.52,
    essentialism: 0.24,
    rehabilitative_justice: 0.86,
    punitive_justice: 0.07,
    progressive: 0.86,
    conservative: 0.14,
    internationalism: 0.88,
    nationalism: 0.05,
    communism: 0.74,
    capitalism: 0.1,
    regulation: 0.81,
    laissez_faire: 0.07,
    ecology: 0.48,
    production: 0.45,
    revolution: 0.71,
    reform: 0.29,

    materialism: 0,
    idealism: 0,
    sustainability: 0,
    growth_at_all_costs: 0,
    anarchism: 1,
    pragmatism: 1,
    feminism: 0,
    complotism: 0,
    veganism: 0,
    monarchism: 0,
    religion: 0
  },

  undecided_right: {
    constructivism: 0.64,
    essentialism: 0.05,
    rehabilitative_justice: 0.38,
    punitive_justice: 0.31,
    progressive: 0.62,
    conservative: 0.17,
    internationalism: 0.55,
    nationalism: 0.12,
    communism: 0.17,
    capitalism: 0.5,
    regulation: 0.33,
    laissez_faire: 0.24,
    ecology: 0.36,
    production: 0.45,
    revolution: 0.19,
    reform: 0.33,

    materialism: 0,
    idealism: 0,
    sustainability: 0,
    growth_at_all_costs: 0,
    anarchism: 0,
    pragmatism: 0,
    feminism: 0,
    complotism: 0,
    veganism: 0,
    monarchism: 0,
    religion: 0
  }
} satisfies Record<string, Record<PairedAxesKey | UnpairedAxesKey, number>>
</script>
