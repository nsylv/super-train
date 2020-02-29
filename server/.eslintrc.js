module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
  },
  rules: {
    // eslint and eslint-typescript recommended rules are enabled (see extends section above)
    // eslint recommended rules: https://eslint.org/docs/rules/
    // eslint typescript recommended rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
};
