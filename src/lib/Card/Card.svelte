<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		src,
		alt,
		header,
		footer,
		children,
		class: classname = '',
		separator = false
	}: {
		src?: string;
		alt?: string;
		header?: Snippet;
		footer?: Snippet;
		children?: Snippet;
		class?: string;
		separator?: boolean;
	} = $props();
</script>

{#snippet hr()}
	{#if children && separator}
		<hr class="w-full border-t border-cat-surface2 md:hidden" />
	{/if}
{/snippet}

<div
	class={`flex flex-col rounded-lg border border-cat-surface2 bg-cat-surface1 md:flex-row ${classname}`}
>
	{#if src}
		<img
			class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-72 md:!rounded-none md:!rounded-s-lg"
			{src}
			{alt}
		/>
	{/if}

	{#if header}
		{@render header()}
		{@render hr()}
	{/if}
	{#if children}
		<div class="flex flex-col justify-start p-8 sm:p-9 md:p-7 xl:p-9">
			{@render children()}
		</div>
	{/if}
	{#if footer}
		{@render hr()}
		{@render footer()}
	{/if}
</div>
