<script lang="ts">
	import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
	import * as THREE from 'three'
	import * as SC from 'svelte-cubed'
	import { applyMaterial } from '$lib/utils'
	import { onMount } from 'svelte'
	import NextLink from '$lib/NextLink/NextLink.svelte'
	import Spinner from '$lib/Spinner/Spinner.svelte'

	let guitar: GLTF
	let racket: GLTF
	let pixelRatio: number
	let wrapper: HTMLDivElement

	let spin = 0
	let loading = true

	onMount(async () => {
		pixelRatio = window.devicePixelRatio

		const loader = new GLTFLoader()
		guitar = await loader.loadAsync('/assets/models/guitar/scene.gltf')
		racket = await loader.loadAsync('/assets/models/racket/scene.gltf')

		applyMaterial(
			guitar.scene,
			new THREE.MeshStandardMaterial({
				metalness: 0,
				// roughness: 0,
				color: new THREE.Color(0xa3be8c),
				wireframe: true
			})
		)

		applyMaterial(
			racket.scene,
			new THREE.MeshStandardMaterial({
				metalness: 0,
				color: new THREE.Color(0xebcb8b),
				wireframe: true
			})
		)

		loading = false
	})

	SC.onFrame(() => {
		spin += 0.01
	})
</script>

<!-- nord15: 0xb48ead -->
<!-- nord14: 0xa3be8c -->
<!-- nord13: 0xebcb8b -->
<!-- nord12: 0xd08770 -->
<!-- nord11: 0xbf616a -->

<div class="wrapper" bind:this={wrapper}>
	{#if loading}
		<div class="relative top-16 left-3">
			<Spinner />
		</div>
	{/if}
	​<SC.Canvas
		antialias
		alpha
		{pixelRatio}
		width={wrapper?.clientWidth}
		height={wrapper?.clientHeight}
	>
		<SC.PerspectiveCamera position={[-10, 36, 20]} near={1} far={500} fov={40} zoom={0.7} />
		<SC.OrbitControls enableZoom={false} enableDamping={true} dampingFactor={0.05} />
		<SC.AmbientLight intensity={0.75} />
		<SC.DirectionalLight intensity={0.6} position={[0, 10, 10]} />

		{#if !loading}
			<SC.Primitive object={guitar.scene} scale={[0.7, 0.7, 0.7]} rotation={[spin + 0.04, 0, 0]} />
			<SC.Primitive object={racket.scene} scale={[50, 50, 50]} rotation={[0, 0, spin + 0.04]} />
		{/if}
	</SC.Canvas>
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
		@apply absolute top-0 h-screen w-screen overflow-hidden;

		:global(> .container) {
			@apply max-w-none; /* fix conflict with tailwindcss */
		}
	}
</style>
