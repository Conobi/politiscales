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
