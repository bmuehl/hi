<script lang="ts">
	import '../styles/app.postcss'
	import PageTransition from '$lib/PageTransition/PageTransition.svelte'
	import type { LayoutData } from './$types'
	import { getJoke } from './jokes/+server'

	const fetchJoke = async () => {
		data.joke = await getJoke()
	}

	export let data: LayoutData
</script>

<PageTransition path={data.path}>
	<slot />
</PageTransition>

<footer class="bg-nord1 overflow-hidden max-w-full py-4">
	<div class="container mx-auto text-center">
		<div class="flex flex-col">
			{@html data.joke}
		</div>

		<hr class="border-nord2" />

		<div class="text-xs mt-4">
			Not funny? - <button class="text-nord10" on:click={fetchJoke}>[try again]</button>
		</div>
	</div>
</footer>
