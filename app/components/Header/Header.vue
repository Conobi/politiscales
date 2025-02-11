<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <UHeader>
    <template #title>
      <h1>Politiscales</h1>
    </template>

    <template #right>
      <HeaderLangSwitcher />
      <UColorModeButton />
    </template>
  </UHeader>
</template>
