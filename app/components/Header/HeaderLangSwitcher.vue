<script lang="ts" setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const toast = useToast()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const items = computed(() => {
  return availableLocales.value.map((i) => {
    return {
      label: i.name,
      emoji: i.emoji,
      value: i.code
    }
  })
})

const selected = ref({
  label: locales.value.find((i) => i.code === locale.value)?.name,
  emoji: locales.value.find((i) => i.code === locale.value)?.emoji,
  value: locales.value.find((i) => i.code === locale.value)?.value
})
</script>

<template>
  <USelectMenu
    v-model="selected"
    :items="items"
    :search-input="false"
    @update:model-value="(to) => navigateTo(switchLocalePath(to.value))"
  >
    <template #leading="{ modelValue, ui }">
      <span v-if="modelValue?.emoji" class="size-5 text-center">
        {{ modelValue?.emoji }}
      </span>
      <UIcon v-else name="i-lucide-earth" :class="ui.leadingIcon()" />
    </template>
    <template #item-leading="{ item }">
      <span v-if="item.emoji" class="size-5 text-center">
        {{ item.emoji }}
      </span>
    </template>
  </USelectMenu>
</template>

<style></style>
