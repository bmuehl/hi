<script lang="ts">
	import '../styles/app.postcss'
	import PageTransition from '$lib/PageTransition/PageTransition.svelte'
	import type { LayoutData } from './$types'

	const fetchJoke = async () => {
		const response = await fetch('/jokes')
		data.joke = await response.text()
	}

	export let data: LayoutData
</script>

<div class="max-width: 64rem container mx-auto">
	<PageTransition path={data.path}>
		<slot />
	</PageTransition>
</div>

<footer class="flex flex-col items-center bg-nord1 py-6">
	{@html data.joke}

	<p class="text-center text-xs">
		Not funny? <button on:click={fetchJoke}>[try again!]</button>
	</p>
</footer>
