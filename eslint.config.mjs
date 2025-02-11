// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'

export default withNuxt(
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      semi: ['error', 'never'],
      '@typescript-eslint/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true
        }
      ],
      'no-console': 'off'
    }
  },
  eslintConfigPrettier
)
