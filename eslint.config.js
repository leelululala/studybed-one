import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      js,
      prettier: prettierPlugin,
      'unused-imports': unusedImports,
    },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'prettier/prettier': 'error',

      // 안 쓰는 import 자동 제거
      'unused-imports/no-unused-imports': 'error',

      // 안 쓰는 변수 경고
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  pluginReact.configs.flat.recommended,
];
