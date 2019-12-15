module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "linebreak-style": 0,
    "no-mixed-operators": 0,
    "array-callback-return": 0,
    "consistent-return": 0,
    "no-return-assign": 0,
    "no-param-reassign": 0

  },
};
