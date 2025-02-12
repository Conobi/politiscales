<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <UHeader :to="localePath('/')">
    <template #title>
      <h1 class="font-serif">Politiscales</h1>
    </template>

    <template #right>
      <HeaderLangSwitcher />
      <UColorModeButton />
    </template>
  </UHeader>
</template>

<style scoped></style>
