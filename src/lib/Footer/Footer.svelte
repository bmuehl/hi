<script lang="ts">
	import { getJoke } from '$lib/utils'
	export let joke = 'Loading joke...'

	const fetchJoke = async () => {
		joke = await getJoke()
	}
</script>

<footer class="w-full overflow-hidden bg-nord1 py-2 shadow-lg">
	<div class="container mx-auto flex flex-col px-2 text-center">
		<div class="flex flex-col text-xs">
			{@html joke}
		</div>

		<hr class="my-3 border-nord2" />

		<div class="mb-2 text-xs">
			<button class="text-nord10" on:click={fetchJoke}>[try again]</button>
		</div>
	</div>
</footer>
