<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<span
	class="whitespace-nowrap rounded-full border border-cat-overlay0 bg-cat-surface2 px-3 py-1 text-sm text-cat-mauve"
>
	{@render children()}
</span>
