<script lang="ts">
	import type { Component } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		src: Component;
		size?: 'l' | 'md' | 'base' | 'xs';
	}

	const { src, size = 'base', ...rest }: Props = $props();
</script>

<span
	class={`${rest.class} icon inline-flex h-8`}
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
