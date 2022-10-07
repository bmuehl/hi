<script lang="ts">
	import * as THREE from 'three'
	import { onMount } from 'svelte'
	import type { PageData } from './$types'
	import Text from './Text.svelte'
	import { tweened } from 'svelte/motion'
	import { cubicInOut } from 'svelte/easing'
	import {
		AmbientLight,
		Canvas,
		DirectionalLight,
		TrackballControls,
		PerspectiveCamera
	} from '$lib/Three'

	export let data: PageData

	let pixelRatio: number
	let wrapper: HTMLDivElement
	let cameraPositionZ = tweened(1, { duration: 2500, easing: cubicInOut })
	// let cameraPositionZ = tweened(30, { duration: 2500, easing: cubicInOut })

	onMount(() => {
		pixelRatio = window.devicePixelRatio
		cameraPositionZ.set(30)
	})
</script>

<div class="wrapper" bind:this={wrapper}>
	​<Canvas
		antialias
		alpha
		{pixelRatio}
		width={wrapper?.clientWidth}
		height={wrapper?.clientHeight}
		fog={new THREE.FogExp2(0x2e3440, 0.02)}
	>
		<!-- <Primitive object={new THREE.AxesHelper(10)} /> -->
		<PerspectiveCamera position={[1, 1, $cameraPositionZ]} />
		<TrackballControls zoomSpeed={2} panSpeed={0} />
		<AmbientLight intensity={0.75} />
		<DirectionalLight intensity={0.6} position={[-2, 3, 2]} />

		{#each data.skills as skill, index}
			<Text {index} length={data.skills.length}>{skill.name}</Text>
		{/each}
	</Canvas>
</div>

<style lang="postcss">
	.wrapper {
		@apply absolute top-0 h-screen w-screen overflow-hidden;

		:global(> .container) {
			@apply max-w-none; /* fix conflict with tailwindcss */
		}
	}
</style>
