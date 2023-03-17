module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    // Parsing error: Cannot read file '.../tsconfig.json'.eslint: --> https://stackoverflow.com/a/64940811
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    // Solo lo añado como referencia con su valor por defecto
    '@typescript-eslint/explicit-function-return-type': 'error'
  }
}
