<script lang="ts">
	import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
	import * as THREE from 'three'
	import * as SC from 'svelte-cubed'
	import { applyMaterial } from '$lib/utils'
	import { onMount } from 'svelte'
	import NextLink from '$lib/NextLink/NextLink.svelte'

	let model: GLTF | null = null
	let pixelRatio: number
	let wrapper: HTMLDivElement

	let spin = 0

	onMount(async () => {
		pixelRatio = window.devicePixelRatio

		const loader = new GLTFLoader()
		model = await loader.loadAsync('/assets/models/guitar/scene.gltf')

		applyMaterial(
			model.scene,
			new THREE.MeshStandardMaterial({
				metalness: 0,
				// roughness: 0,
				color: new THREE.Color(0xa3be8c),
				wireframe: true
			})
		)
	})

	SC.onFrame(() => {
		spin += 0.01
	})
</script>

<!-- nord15: 0xb48ead -->
<!-- nord14: 0xa3be8c -->
<!-- nord13: 0xebcb8b -->
<!-- nord11: 0xbf616a -->

<div class="wrapper" bind:this={wrapper}>
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

		{#if model}
			<SC.Primitive object={model.scene} scale={[0.7, 0.7, 0.7]} rotation={[spin + 0.04, 0, 0]} />
		{/if}
	</SC.Canvas>
</div>

<div class="z-20">
	<h1 class="mb-8">About Me</h1>

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
