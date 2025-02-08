// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier'

export default withNuxt(
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
