<template>
  <UPageHeader title="Hello world!" />
  <div class="flex justify-center p-10">
    <NuxtLinkLocale to="questions">
      <UButton :label="$t('start_test')" color="primary" size="xl" />
    </NuxtLinkLocale>
  </div>
</template>
