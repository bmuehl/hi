<script lang="ts">
	import type { SvelteComponent } from 'svelte'

	export let src: typeof SvelteComponent
	export let size: 'l' | 'md' | 'base' | 'xs' = 'base'
</script>

<span
	class={`${$$props.class} icon inline-flex h-8`}
	class:h-14={size === 'l'}
	class:w-14={size === 'l'}
	class:h-8={size === 'md'}
	class:w-8={size === 'md'}
	class:h-5={size === 'base'}
	class:w-5={size === 'base'}
	class:h-3={size === 'xs'}
	class:w-3={size === 'xs'}
>
	<svelte:component this={src} />
</span>

<style lang="postcss">
	:global(.icon > svg) {
		width: 100%; /* fix for safari */
	}
</style>
