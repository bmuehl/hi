<script lang="ts">
	import { fly } from 'svelte/transition';
	import { expoOut, expoIn } from 'svelte/easing';
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
		class="flex h-dvh w-full flex-col items-center overflow-y-auto pb-32 pt-24"
		in:fly={{ x: width, duration, delay: duration, easing: expoOut }}
		out:fly={{ x: -width, duration, easing: expoIn }}
		bind:clientWidth={width}
	>
		{@render children()}
	</section>
{/key}
