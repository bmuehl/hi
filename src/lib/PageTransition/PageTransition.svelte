<script lang="ts">
	import { fly } from 'svelte/transition'
	import { backIn, elasticOut } from 'svelte/easing'

	export let path: string

	let width: number
	const duration = 350
</script>

{#key path}
	<section
		in:fly={{ x: width, duration, delay: duration - 100, easing: elasticOut }}
		out:fly={{ x: -width, duration, easing: backIn }}
		bind:clientWidth={width}
	>
		<slot />
	</section>
{/key}

<style lang="postcss">
	section {
		@apply container flex min-h-screen min-w-full flex-col items-center justify-center px-4 pt-16 pb-9;
	}
</style>
