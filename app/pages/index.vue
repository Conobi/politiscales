<script setup lang="ts"></script>

<template>
  <UPageHeader title="Hello world!" />
  <div class="flex justify-center p-10">
    <UButton
      to="questions"
      :label="$t('start_test')"
      color="primary"
      size="xl"
    />
  </div>
</template>
