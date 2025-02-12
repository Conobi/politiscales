// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui-pro', '@nuxt/eslint', '@nuxtjs/i18n', '@nuxt/fonts'],

  css: ['~/assets/css/main.css'],

  icon: {
    clientBundle: {
      scan: {
        globInclude: ['app/**.vue']
      }
    }
  },
  fonts: {
    defaults: {
      weights: [400, 600],
      styles: ['normal', 'italic']
    },
    experimental: {
      processCSSVariables: true
    }
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    locales: [
      {
        code: 'fr',
        file: 'fr.json',
        name: 'Français',
        emoji: '🇫🇷'
      },
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
        emoji: '🇬🇧'
      },
      {
        code: 'es',
        file: 'es.json',
        name: 'Español',
        emoji: '🇪🇸'
      },
      {
        code: 'zh',
        file: 'zh.json',
        name: '中文',
        emoji: '🇨🇳'
      },
      {
        code: 'ru',
        file: 'ru.json',
        name: 'Русский',
        emoji: '🇷🇺'
      },
      {
        code: 'it',
        file: 'it.json',
        name: 'Italiano',
        emoji: '🇮🇹'
      },
      {
        code: 'ar',
        file: 'ar.json',
        name: 'العربية',
        emoji: '🇸🇦'
      }
    ],
    lazy: true,
    defaultLocale: 'en',
    vueI18n: '~/i18n.config.ts'
  },
  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})
