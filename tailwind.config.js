/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	// ...
	theme: {
		fontFamily: {
			display: ['"Funnel Display", sans-serif'],
			body: ['"Open Sans"'],
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['dracula', 'winter'],
	},
}
