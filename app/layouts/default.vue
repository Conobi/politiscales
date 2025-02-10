<template>
  <div>
    <Header />
    <UPage>
      <template #left>
        <UPageAside> </UPageAside>
      </template>
      <UPageBody>
        <slot />
      </UPageBody>
      <template #right>
        <UPageAside> </UPageAside>
      </template>
    </UPage>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
