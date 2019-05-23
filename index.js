module.exports = {
	extends: ['eslint:recommended', 'airbnb-base'],
	plugins: ['import'],
	rules: {
		'array-bracket-spacing': ['error', 'never'],
		'arrow-body-style': ['off'],
		'arrow-parens': ['error', 'as-needed'],
		'camelcase': ['error', { properties: 'always' }],
		'class-methods-use-this': ['off'],
		'comma-dangle': ['error', 'never'],
		'import/prefer-default-export': ['off'],
		'indent': ['error', 'tab'],
		'max-len': ['off'],
		'no-bitwise': ['off'],
		'no-console': ['warn', { allow: ['error', 'warn'] }],
		'no-extra-semi': ['error'],
		'no-param-reassign': ['off'],
		'no-plusplus': ['off'],
		'no-restricted-syntax': ['off'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-underscore-dangle': ['off'],
		'object-curly-newline': ['error', { multiline: true, consistent: true }],
		'object-curly-spacing': ['error', 'always'],
		'prefer-destructuring': ['off'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'wrap-iife': ['error', 'inside']
	}
};
