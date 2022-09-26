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
		@apply container mx-auto flex min-h-screen flex-col items-center justify-center px-4 pt-20;
	}
</style>
