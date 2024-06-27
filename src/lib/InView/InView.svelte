<script lang="ts">
	import { inView } from '$lib/utils';
	import type { Snippet } from 'svelte';

	const { threshold = 0.5, children }: { threshold?: number; children: Snippet } = $props();

	let animated = $state(false);
</script>

<div use:inView={{ threshold }} onenter={() => (animated = true)}>
	{#if animated}
		{@render children()}
	{/if}
</div>
