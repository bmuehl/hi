<script lang="ts">
	import * as THREE from 'three'
	import { onMount } from 'svelte'
	import type { PageData } from './$types'
	import Text from './Text.svelte'
	import { tweened } from 'svelte/motion'
	import { expoIn } from 'svelte/easing'
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		TrackballControls,
		PerspectiveCamera
	} from '$lib/Three'

	export let data: PageData

	let pixelRatio: number
	let clientHeight: number
	let clientWidth: number
	let cameraPositionZ = tweened(11, { duration: 1200, easing: expoIn })
	let loaded = false
	let active = false

	onMount(() => {
		pixelRatio = window.devicePixelRatio
	})

	$: (async () => {
		if (loaded) {
			await cameraPositionZ.set(30)
			active = true
		}
	})()
</script>

<div class="wrapper" bind:clientHeight bind:clientWidth>
	​<Canvas
		antialias
		alpha
		{pixelRatio}
		width={clientWidth}
		height={clientHeight}
		fog={new THREE.Fog(0x2e3440, 0, 60)}
	>
		<!-- <Primitive object={new THREE.AxesHelper(10)} /> -->
		<PerspectiveCamera position={[1, 1, $cameraPositionZ]} />
		{#if active}
			<TrackballControls zoomSpeed={2} panSpeed={0} maxDistance={50} minDistance={4} />
		{/if}
		<AmbientLight intensity={0.75} />
		<DirectionalLight intensity={0.6} position={[-2, 3, 2]} />

		{#each data.skills as skill, index}
			{#if data.skills.length === index + 1}
				<Text {index} length={data.skills.length} onSync={() => (loaded = true)}>{skill.name}</Text>
			{:else}
				<Text {index} length={data.skills.length}>{skill.name}</Text>
			{/if}
		{/each}
	</Canvas>
</div>

<style lang="postcss">
	.wrapper {
		@apply absolute top-0 h-screen w-screen overflow-hidden;
	}
</style>
