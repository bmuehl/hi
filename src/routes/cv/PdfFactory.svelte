<script lang="ts">
	import { tick, untrack, type Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();

	let pages: [HTMLElement?] = $state([]);
	let pageNumbers = $state(0);

	const nextPage = async (children: HTMLElement[]) => {
		pageNumbers += 1;
		await tick();

		for (const child of children) {
			pages[pageNumbers]?.appendChild(child);
		}

		generatePages();
	};

	const generatePages = () => {
		const overflownChildren: HTMLElement[] = [];

		const page = pages[pageNumbers];
		if (!page || !page.scrollHeight || !page.clientHeight) {
			return;
		}

		page.childNodes.forEach((child) => {
			if (child instanceof HTMLElement) {
				if (child.offsetTop + child.clientHeight - page.offsetTop > page.clientHeight) {
					overflownChildren.push(child);
					page.removeChild(child);
				}
			}
		});

		if (overflownChildren.length > 0) {
			nextPage(overflownChildren);
		}
	};

	$effect(() => {
		untrack(() => {
			generatePages();
		});
	});
</script>

{#snippet page({ number, content }: { number: number; content?: Snippet })}
	<article
		class="flex h-[297mm] w-[210mm] break-after-page flex-col gap-4 overflow-hidden rounded-xl bg-white px-20 py-14"
		bind:this={pages[number]}
	>
		{@render content?.()}
	</article>
{/snippet}

<div
	class="flex flex-col gap-4 text-sm leading-4 text-black print:visible print:absolute print:inset-0 print:block print:border-none"
>
	{@render page({ number: 0, content: children })}
	{#each Array(pageNumbers) as _, index}
		{@render page({ number: index + 1 })}
	{/each}
</div>

<style lang="postcss">
	@media print {
		@page {
			size: A4;
			margin: 0;
		}

		:root {
			print-color-adjust: exact;
			background-color: white !important;
		}
		:global(body) {
			visibility: hidden;
		}
	}
</style>
