<script lang="ts">
	import { onMount } from 'svelte'
	import NextLink from '$lib/NextLink/NextLink.svelte'
	import Spinner from '$lib/Spinner/Spinner.svelte'
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		OrbitControls,
		PerspectiveCamera
	} from '@threlte/core'
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

{#if loading}
	<div
		class="absolute top-0 flex items-center justify-center h-screen w-screen pointer-events-none"
	>
		<Spinner />
	</div>
{/if}

<div class="wrapper">
	​<Canvas linear flat>
		<PerspectiveCamera position={{ x: -10, y: 36, z: 20 }} near={1} far={500} fov={40} scale={0.7}>
			<OrbitControls
				enableZoom={false}
				enableDamping={true}
				dampingFactor={0.05}
				enablePan={false}
			/>
		</PerspectiveCamera>
		<AmbientLight intensity={0.75} />
		<DirectionalLight intensity={0.6} position={{ x: 0, y: 10, z: 10 }} />
		<Scene />
	</Canvas>
</div>

<div class="z-20 flex flex-col items-center">
	<div class="p-10 rounded-lg bg-nord2 bg-opacity-80">
		<h1 class="mb-8">About Me</h1>

		<span>// TODO</span>
	</div>

	<NextLink href="/" top />
</div>

<style lang="postcss">
	.wrapper {
		@apply absolute top-0 flex h-screen w-screen overflow-hidden;
	}
</style>
