module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    indent: ['error', 2],
    'space-before-function-paren': 0,
    'eol-last': 0,
    'no-useless-escape': 'off',
    'guard-for-in': 'error'
  }
}