import catppuccin from '@catppuccin/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		container: {
			center: true
		},
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
