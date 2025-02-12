<template>
  <div>
    <ResultsImage v-if="results" :axes="results" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { decodeResultsStr, decodeLegacyResultsStr, encodeResultsStr } =
  useSerializer()

const results = computed<AxisValues | null>(() => {
  // We remove the trailing # from the hash
  try {
    const ret = decodeResultsStr(route.hash.slice(1))
    if (!ret) throw new Error()
    return ret
  } catch {
    try {
      const ret = decodeLegacyResultsStr(Object.keys(route.query)[0] as string)
      if (!ret) throw new Error()
      navigateTo(
        localePath({ name: 'results', hash: `#${encodeResultsStr(ret)}` })
      )
      return null
    } catch {
      return null
    }
  }
})
</script>
