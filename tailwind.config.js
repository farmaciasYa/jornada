/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js,php}'],
	theme: {
		extend: {
			screens: {
				xs: '400px',
				sm: '520px',
				md: '768px',
				desktop: '992px',
			},
			colors: {
				gris: '#777',
				blanco: '#fff',
				negro: '#1a1a1a',
				negroClaro: '#363636',
				celesteTransparente: '#95D4EA',
				celesteClaro: '#00B4DA',
				celeste: '#0073B0',
				naranja: '#FF5800',
				naranjaClaro: '#FF8A44',
				naranjaTransparente: '#FFBD94',
				transparent: 'transparent',
				rojo: '#ED4334',
				rojoClaro: '#ED828B',
				verde: '#15B3A0',
				verdeClaro: '#70BFAB',
			},
		},
	},
	plugins: [],
};
