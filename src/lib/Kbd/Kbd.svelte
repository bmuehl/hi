<script lang="ts">
	import type { Snippet } from 'svelte';

	let { icon = false, children }: { icon?: boolean; children: Snippet } = $props();
</script>

<kbd
	class="flex items-center justify-center rounded-lg border border-cat-overlay0 bg-cat-surface1 px-2 py-1.5 text-xs font-semibold text-cat-subtext0 shadow-sm"
	class:px-0.5={icon}
	class:py-0.5={icon}
>
	{@render children()}
</kbd>
