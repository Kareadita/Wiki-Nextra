/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,html,md,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,html,md,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,html,md,mdx}',
		'./theme.config.tsx',
	],
	darkMode: 'class',
	plugins: [],
	theme: {
		extend: {},
	},
}
