/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				primary: '#1c1c1c',
				secondary: '#fafaff',
				tertiary: '#5c3464',
				brand: '#5c3464',
				brand2: '#c197c0',
				brand3: '#bf8290',
				accent: '#eed185',
				card: '#caacd0',
				card2: '#ecebe4',
				dark: '#1c1c1c',
				light: '#fafaff',
			},
			boxShadow: {
				card: '0px 0.8em 5em -0.8em #ecebe4',
			},
			screens: {
				xs: '450px',
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/herobg.png')",
			},
		},
	},
	plugins: [],
};
// --brand: #5c3464;
// 	--brand-2: #c197c0;
// 	--brand-3: #bf8290;
// 	--accent: #eed185;
// 	--card: #caacd0;
// 	--card-2: #ecebe4;
// 	--dark: #1c1c1c;
// 	--light: #fafaff;
