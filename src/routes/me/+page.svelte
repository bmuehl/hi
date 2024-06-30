<script lang="ts">
	import Spinner from '$lib/Spinner/Spinner.svelte';
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';
	import Card from '$lib/Card/Card.svelte';
	import { NoToneMapping } from 'three';

	let loading = $state(true);

	$effect(() => {
		loading = false;
	});
</script>

<!-- nord15: 0xb48ead -->
<!-- nord14: 0xa3be8c -->
<!-- nord13: 0xebcb8b -->
<!-- nord12: 0xd08770 -->
<!-- nord11: 0xbf616a -->
<!-- nord11: 0x2e3440 -->

<!-- TODO: add personal stuff like favourite color themer etc. -->
<!-- Idea for categories: NERD, MUSIC, SPORT  -->

<svelte:head>
	<title>Bernhard Mühl | My Self</title>
</svelte:head>

{#if loading}
	<div
		class="pointer-events-none absolute top-0 flex h-screen w-screen items-center justify-center"
	>
		<Spinner />
	</div>
{/if}

<div class="absolute top-0 flex h-full w-full overflow-hidden">
	<Canvas toneMapping={NoToneMapping}>
		<Scene />
	</Canvas>
</div>

<div class="z-20 flex flex-col items-center">
	<Card>
		<h1 class="mb-8">About Me</h1>

		<span>// TODO</span>
	</Card>
</div>
