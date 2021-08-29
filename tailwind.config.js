module.exports = {
	mode: 'jit',
	purge: [
		'./public/**/*.html',
		'./pages/**/*.{js,jsx,ts,tsx,vue}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['DM Sans', 'sans-serif'],
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
