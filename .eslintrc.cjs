module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    // 处理 eslint 和 prettier 冲突的规则
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        semi: true,
      },
    ],
  },
};
