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

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
