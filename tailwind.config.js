const defaultTheme = require('tailwindcss/defaultTheme');

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
			sans: ['DM Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
		},

		extend: {
			fontFamily: {
				quote: "'Times New Roman', serif",
				heading: "'Bodoni Moda', serif",
				raleway: "'Raleway', sans-serif",
			},
			colors: {
				bgDark: '#212121',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
