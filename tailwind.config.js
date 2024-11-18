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
		extend: {
			backgroundImage: {
				'dark2': "url('/homepage-dark2.png')",
				'dark3': "url('/homepage-dark3.png')",
				'dark4': "url('/homepage-dark4.png')",
				'dark5': "url('/homepage-dark5.png')",
				'dark6': "url('/homepage-dark6.png')",
				'dark7': "url('/homepage-dark7.png')",
				'dark8': "url('/homepage-dark8.png')",
				'dark9': "url('/homepage-dark9.png')",
				'light2': "url('/homepage-light2.png')",
				'light3': "url('/homepage-light3.png')",
				'light4': "url('/homepage-light4.png')",
				'light5': "url('/homepage-light5.png')",
				'light6': "url('/homepage-light6.png')",
				'light7': "url('/homepage-light7.png')",
				'light8': "url('/homepage-light8.png')",
				'light9': "url('/homepage-light9.png')",
				'light10': "url('/homepage-light10.png')",
				'light11': "url('/homepage-light11.png')",
				'light12': "url('/homepage-light12.png')",
				'light13': "url('/homepage-light13.png')",
			},
		},
	},
}
