<script lang="ts">
	import { getJoke } from '$lib/utils'
	export let joke = 'Loading joke...'

	const fetchJoke = async () => {
		joke = await getJoke()
	}
</script>

<footer class="w-full overflow-hidden border-t-2 border-t-nord1 py-2 shadow-lg">
	<div class="container mx-auto flex flex-col px-2 text-center">
		<div class="flex flex-col text-xs">
			{@html joke}
		</div>

		<div class="h-3" />

		<div class="mb-2 text-xs">
			<button class="text-nord10" on:click={fetchJoke}>[try again]</button>
		</div>
	</div>
</footer>
