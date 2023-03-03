<script lang="ts">
	import { getJoke } from '$lib/utils'

	export let joke = 'Loading joke...'

	const fetchJoke = async () => {
		joke = await getJoke()
	}
</script>

<footer class="w-full overflow-hidden border-t-2 border-t-nord1 py-2 shadow-lg">
	<div class="container relative mx-auto mb-2 flex flex-col px-2 text-center">
		<div class="flex flex-col text-xs">
			{@html joke}
		</div>

		<div class="h-3" />

		<div class="text-xs">
			<button class="text-nord10" on:click={fetchJoke}>[try again]</button>
		</div>

		<div class="flex items-center text-xs text-nord2 md:absolute md:right-0 md:bottom-0">
			cv.berni.cloud @ v{__CV_VERSION__}
		</div>
	</div>
</footer>
