/** @type {import('eslint').Linter.Config} */
module.exports = {
    extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        'no-unused-vars': 'warn',
        indent: ['error', 4],
        'no-tabs': 0,
        'padded-blocks': ['error', 'always'],
        'react/prop-types': 'off',
        'react/self-closing-comp': 'warn'
    }
}
