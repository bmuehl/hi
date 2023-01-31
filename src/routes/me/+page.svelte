<script lang="ts">
	import { onMount } from 'svelte'
	import NextLink from '$lib/NextLink/NextLink.svelte'
	import Spinner from '$lib/Spinner/Spinner.svelte'
	import { Canvas } from '@threlte/core'
	import Scene from './Scene.svelte'

	let loading = true

	onMount(() => {
		loading = false
	})
</script>

<!-- nord15: 0xb48ead -->
<!-- nord14: 0xa3be8c -->
<!-- nord13: 0xebcb8b -->
<!-- nord12: 0xd08770 -->
<!-- nord11: 0xbf616a -->
<!-- nord11: 0x2e3440 -->

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

<div class="absolute top-0 flex h-screen w-screen overflow-hidden">
	<Canvas linear flat>
		<Scene />
	</Canvas>
</div>

<div class="z-20 flex flex-col items-center">
	<div class="rounded-lg bg-nord2 bg-opacity-80 p-10">
		<h1 class="mb-8">About Me</h1>

		<span>// TODO</span>
	</div>

	<NextLink href="/" top />
</div>
