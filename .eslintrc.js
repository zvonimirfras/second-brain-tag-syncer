module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module',
		'project': './tsconfig.json'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'linebreak-style': [
			'error',
			'unix'
		],
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': 'off',
		'quotes': 'off',
		'@typescript-eslint/quotes': [
			'error',
			'single',
			{
				'avoidEscape': true
			}
		],
		'semi': 'off',
		'@typescript-eslint/semi': [
			'error',
			'always'
		],
		'indent': 'off',
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1
			}
		],
		'@typescript-eslint/naming-convention': [
			// Considering functional components are PascalCase, we must allow both formats
			'error',
			{
				'selector': 'function',
				'format': ['PascalCase', 'camelCase']
			}
		],
		'@typescript-eslint/member-delimiter-style': [
			// Require semicolon at end of interfaces & type literals members
			'error',
			{
				'multiline': {
					'delimiter': 'semi',
					'requireLast': true
				},
				'singleline': {
					'delimiter': 'semi',
					'requireLast': false
				}
			}
		],
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': ['error'],
		'@typescript-eslint/no-inferrable-types': 'error',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': [
			'off',
			{
				'hoist': 'all'
			}
		],
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				// Allow underscore in function parameter to keep signature
				'argsIgnorePattern': '_',
			}
		],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'brace-style': 'off',
		'@typescript-eslint/brace-style': ['error'], // Using default 1tbs
		'keyword-spacing': 'off',
		'@typescript-eslint/keyword-spacing': ['error'],
		'curly': 'error',
		'default-case': 'error',
		'eol-last': [
			'error',
			'always'
		],
		'eqeqeq': [
			'error',
			'smart'
		],
		'guard-for-in': 'error',
		'max-len': [
			'error',
			{
				'code': 150
			}
		],
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-console': [
			'error',
			{
				'allow': [
					'log',
					'info',
					'warn',
					'dir',
					'timeLog',
					'assert',
					'clear',
					'count',
					'countReset',
					'group',
					'groupEnd',
					'table',
					'dirxml',
					'error',
					'groupCollapsed',
					'Console',
					'profile',
					'profileEnd',
					'timeStamp',
					'context'
				]
			}
		],
		'no-debugger': 'error',
		'no-duplicate-imports': 'error',
		'no-eval': 'error',
		'no-fallthrough': 'error',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxEOF: 1,
				maxBOF: 0
			}
		],
		'no-new-wrappers': 'error',
		'no-redeclare': 'error',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'error',
		'no-unused-labels': 'error',
		'no-var': 'error',
		// Should be using spread operator over Object.assign
		'prefer-object-spread': 'error',
		'object-curly-spacing': [
			'error',
			'always'
		],
		'radix': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				'markers': [
					'/'
				]
			}
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-in-parens': 'error',
	}
};
