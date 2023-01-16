<script lang="ts">
	import { getJoke } from '$lib/utils'
	export let joke = 'Loading joke...'

	const fetchJoke = async () => {
		joke = await getJoke()
	}
</script>

<footer class="bg-nord1 overflow-hidden w-full py-2 shadow-lg">
	<div class="container mx-auto text-center flex flex-col px-2">
		<div class="text-xs flex flex-col">
			{@html joke}
		</div>

		<hr class="border-nord2 my-3" />

		<div class="text-xs mb-2">
			<button class="text-nord10" on:click={fetchJoke}>[try again]</button>
		</div>
	</div>
</footer>
