module.exports = {
    extends: [
        '@mobile-reality/eslint-config/react-typescript',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/text-encoding-identifier-case': 'off',
        'line-comment-position': 'off',
        'no-inline-comments': 'off',
        'prefer-destructuring': ['error', { object: true, array: false }],
        'unicorn/prefer-query-selector': 'warn',
        'unicorn/filename-case': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        'unicorn/expiring-todo-comments': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        radix: 'warn',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/prefer-optional-chain': 'warn',
        'unicorn/prefer-logical-operator-over-ternary': 'off',
        'unicorn/no-useless-undefined': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
};
