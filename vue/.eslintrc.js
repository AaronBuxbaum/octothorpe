const errorInProd = process.env.NODE_ENV === 'production' ? 'error' : 'off';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': errorInProd,
    'no-debugger': errorInProd,
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
};
