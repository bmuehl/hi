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

<footer class="py-6 bg-nord1 overflow-hidden max-w-full">
	<div class="container mx-auto text-center">
		<div class="flex flex-col">
			{@html data.joke}
		</div>

		<p class="text-xs">
			Not funny? <button on:click={fetchJoke}>[try again!]</button>
		</p>
	</div>
</footer>
