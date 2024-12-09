/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
	'./src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        primary: '#34D399',
        secondary: '#1E293B',
        accent: '#D97706',
		border: '#d1d5db', // Define the border color
        background: '#f9fafb', // Define the background color
        foreground: '#111827', // Define the foreground text color
      },
  	}
  },
  plugins: [],
}

