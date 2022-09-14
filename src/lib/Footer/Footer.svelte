<script lang="ts">
	import { getJoke } from '$lib/utils'
	export let joke = 'Loading joke...'

	const fetchJoke = async () => {
		joke = await getJoke()
	}
</script>

<footer class="bg-nord1 overflow-hidden max-w-full py-4">
	<div class="container mx-auto text-center">
		<div class="flex flex-col">
			{@html joke}
		</div>

		<hr class="border-nord2" />

		<div class="text-xs mt-4">
			Not funny? - <button class="text-nord10" on:click={fetchJoke}>[try again]</button>
		</div>
	</div>
</footer>
