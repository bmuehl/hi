const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'th-selection': 'var(--selection)'
			}
		},
		fontFamily: {
			sans: ['Fira Code', 'sans-serif']
		}
	},

	plugins: [require('tailwind-nord')]
}

module.exports = config
