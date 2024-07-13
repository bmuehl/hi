<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	const {
		children,
		class: classname = '',
		...props
	}: { children: Snippet; class?: string; props?: HTMLAnchorAttributes } = $props();
</script>

<a {...props} class={`text-cat-blue before:content-['['] after:content-[']'] ${classname}`}>
	{@render children()}
</a>
