import adapter from '@sveltejs/adapter-static'
import { preprocessThrelte } from '@threlte/preprocess'
import preprocess from 'svelte-preprocess'
import sequence from 'svelte-sequential-preprocessor'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sequence([preprocess({ postcss: true }), preprocessThrelte()]),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined
		}),
		alias: {
			$routes: './src/routes'
		}
	}
}

export default config
