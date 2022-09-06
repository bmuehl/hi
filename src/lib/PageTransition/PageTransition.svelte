<script lang="ts">
	import { fly } from 'svelte/transition'
	import { backIn, elasticOut } from 'svelte/easing'

	export let path: string

	let height: number
	const duration = 350
</script>

{#key path}
	<section
		in:fly={{ y: height, duration, delay: duration - 100, easing: elasticOut }}
		out:fly={{ y: -height, duration, easing: backIn }}
		bind:clientHeight={height}
	>
		<slot />
	</section>
{/key}

<style lang="postcss">
	section {
		@apply h-screen;
		@apply flex flex-col items-center justify-center;
	}
</style>
