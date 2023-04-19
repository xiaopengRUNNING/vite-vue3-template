module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    './eslintrc-auto-import.json',
    'airbnb-base',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 0,
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', '403', '404', '500'], // 需要忽略的组件名
      },
    ],
    // 处理 prettier 和 eslint 冲突的规则
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        semi: true,
      },
    ],
  },
};
