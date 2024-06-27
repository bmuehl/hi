import { sveltekit } from '@sveltejs/kit/vite';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

export default defineConfig({
	plugins: [sveltekit()],

	ssr: {
		noExternal: ['three', 'troika-three-text']
	},

	define: {
		__PROJECT_VERSION__: JSON.stringify(pkg.version)
	}
});
