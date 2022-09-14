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

<PageTransition path={data.path}>
	<slot />
</PageTransition>

<footer class="bg-nord1 py-6 sticky">
	<div class="container mx-auto text-center">
		{@html data.joke}

		<p class="text-xs">
			Not funny? <button on:click={fetchJoke}>[try again!]</button>
		</p>
	</div>
</footer>
