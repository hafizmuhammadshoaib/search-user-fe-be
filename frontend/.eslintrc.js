module.exports = {
    // extends: 'eslint-config-react-app',
    extends: ['eslint-config-react-app'],
    rules: {
        // "no-script-url": "warn",
        'jsx-a11y/anchor-is-valid': 'warn',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'semi': 'error',
        'quotes': ['error', 'single'],
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }]
    }
};
