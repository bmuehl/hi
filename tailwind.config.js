import catppuccin from '@catppuccin/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'th-selection': 'var(--selection)'
			}
		},
		fontFamily: {
			sans: ['JetBrains Mono', 'sans-serif']
		}
	},

	plugins: [
		catppuccin({
			prefix: 'cat',
			defaultFlavour: 'mocha'
		})
	]
};
