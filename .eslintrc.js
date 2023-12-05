module.exports = {
  root: true,
  plugins: ['@typescript-eslint', 'testing-library', 'jest-dom', 'check-file'],
  parser: '@typescript-eslint/parser',
  extends: [
    'next',
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:storybook/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': 'error',
    semi: 'error',
    'no-console': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/no-unused-vars': [
      'error', // or "warn"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.spec.{ts,tsx}': '**/__tests__/',
        '*.stories.{tsx,mdx}': '**/__stories__/',
      },
    ],
    'check-file/filename-naming-convention': [
      'error',
      {
        '**/*.{tsx}': 'CAMEL_CASE',
        '**/!(\\[*\\]).{js,ts}': 'KEBAB_CASE',
      },
      { ignoreMiddleExtensions: true },
    ],
  },
  overrides: [
    {
      files: ['*.stories.tsx', '*.spec.tsx', '**/stories/*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
