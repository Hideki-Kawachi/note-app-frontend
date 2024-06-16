/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Poppins", "sans-serif"],
		},
		colors: {
			gray: {
				500: "#242424",
				400: "#363636",
				300: "#3e3e3e",
				200: "#515151",
				100: "#9b9b9b",
			},
			yellow: {
				500: "#997a2b",
				400: "#cca239",
				300: "#ffcb47",
				200: "#ffd56c",
				100: "#ffe5a3",
			},
			red: {
				500: "#80382d",
				400: "#b34e3e",
				300: "#ff6f59",
				200: "#ff8c7a",
				100: "#ffb7ac",
			},
			green: {
				500: "#1b4438",
				400: "#36886f",
				300: "#43aa8b",
				200: "#69bba2",
				100: "#a1d5c5",
			},
			blue: {
				500: "#27536d",
				400: "#3e84ae",
				300: "#4ea5d9",
				200: "#71b7e1",
				100: "#a7d2ec",
			},
			white: "#ffffff",
			black: "#000000",
		},
		extend: {},
	},
	plugins: [],
};
