module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-quotes': ['error', 'double', { avoidEscape: false }],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    indent: ['error', 2],
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2],
    'vue/multiline-html-element-content-newline': 0,
    quotes: ['error', 'single', { avoidEscape: false }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }]
  },
};
