<script lang="ts">
	import { applyMaterial } from '$lib/utils'
	import { useFrame } from '@threlte/core'
	import { GLTF } from '@threlte/extras'
	import { MeshStandardMaterial, Color } from 'three'

	let spin = 0

	useFrame(() => {
		spin += 0.01
	})
</script>

<GLTF
	useDraco
	url="/assets/models/guitar/scene.gltf"
	scale={{ x: 0.7, y: 0.7, z: 0.7 }}
	rotation={{ x: spin + 0.04, y: 0, z: 0 }}
	on:load={({ detail }) =>
		applyMaterial(
			detail.scene,
			new MeshStandardMaterial({
				color: new Color(0xa3be8c),
				wireframe: true
			})
		)}
/>
<GLTF
	useDraco
	url="/assets/models/racket/scene.gltf"
	scale={{ x: 50, y: 50, z: 50 }}
	rotation={{ x: 0, y: 0, z: spin + 0.04 }}
	on:load={({ detail }) =>
		applyMaterial(
			detail.scene,
			new MeshStandardMaterial({
				color: new Color(0xebcb8b),
				wireframe: true
			})
		)}
/>
<GLTF
	useDraco
	url="/assets/models/bottle/scene.gltf"
	scale={{ x: 0.4, y: 0.4, z: 0.4 }}
	rotation={{ x: 0, y: spin + 0.04, z: 0 }}
	on:load={({ detail }) =>
		applyMaterial(
			detail.scene,
			new MeshStandardMaterial({
				color: new Color(0xd08770),
				wireframe: true
			})
		)}
/>
