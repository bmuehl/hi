<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backIn, elasticOut } from 'svelte/easing';
	import { pathToPage } from '$lib/utils';
	import { store } from '$lib/store.svelte';
	import type { Snippet } from 'svelte';

	const { path, children }: { path: string; children: Snippet } = $props();

	let width = $state(0);
	const duration = 350;

	$effect(() => {
		store.update({ currentPage: pathToPage(path) });
	});
</script>

{#key path}
	<section
		class="flex h-screen w-full flex-col items-center overflow-y-auto pb-32 pt-28"
		in:fly={{ x: width, duration, delay: duration - 100, easing: elasticOut }}
		out:fly={{ x: -width, duration, easing: backIn }}
		bind:clientWidth={width}
	>
		{@render children()}
	</section>
{/key}
