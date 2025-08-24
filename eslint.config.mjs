import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  {
    languageOptions: {
      globals: { React: true },
    },
  },
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'next',
    'prettier',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended'
  ),
  {
    rules: {
      'react/display-name': 'off',
      'no-unused-vars': 'off',
      // 'next/link-passhref': '1',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
]

export default eslintConfig
