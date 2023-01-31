<script lang="ts">
	import { applyMaterial } from '$lib/utils'
	import { GLTF } from '@threlte/extras'
	import { MeshStandardMaterial, Color } from 'three'
	import { T, TransformableObject, useFrame } from '@threlte/core'

	let rotation = 0

	useFrame(() => {
		rotation += 0.008
	})
</script>

<T.Group rotation.y={rotation}>
	<T.PerspectiveCamera
		makeDefault
		position={[0, 0, 0]}
		near={1}
		far={500}
		fov={40}
		scale={1}
		let:ref={cam}
	>
		<TransformableObject object={cam} lookAt={{ y: 2 }} />
	</T.PerspectiveCamera>

	<!-- <T.OrthographicCamera zoom={30} let:ref={cam} position={[0, 5, 10]} makeDefault> -->
	<!-- 	<TransformableObject object={cam} lookAt={{ y: 2 }} /> -->
	<!-- </T.OrthographicCamera> -->
</T.Group>
<T.AmbientLight intensity={0.75} />
<T.DirectionalLight intensity={0.6} position={[0, 10, 10]} />

<GLTF
	useDraco
	url="/assets/models/guitar/scene.gltf"
	scale={0.7}
	position={{ x: 0, y: 60, z: 0 }}
	rotation={{ x: 9.7, y: 0, z: 0 }}
	interactive
	on:click={(e) => console.log(e.detail)}
	on:load={({ detail }) =>
		applyMaterial(
			detail.scene,
			new MeshStandardMaterial({
				color: new Color(0xa3be8c),
				wireframe: true
			})
		)}
/>
<!-- <GLTF -->
<!-- 	useDraco -->
<!-- 	url="/assets/models/racket/scene.gltf" -->
<!-- 	scale={{ x: 50, y: 50, z: 50 }} -->
<!-- 	rotation={{ x: 0, y: 0, z: spin + 0.04 }} -->
<!-- 	on:load={({ detail }) => -->
<!-- 		applyMaterial( -->
<!-- 			detail.scene, -->
<!-- 			new MeshStandardMaterial({ -->
<!-- 				color: new Color(0xebcb8b), -->
<!-- 				wireframe: true -->
<!-- 			}) -->
<!-- 		)} -->
<!-- /> -->
<!-- <GLTF -->
<!-- 	useDraco -->
<!-- 	url="/assets/models/bottle/scene.gltf" -->
<!-- 	scale={{ x: 0.4, y: 0.4, z: 0.4 }} -->
<!-- 	rotation={{ x: 0, y: spin + 0.04, z: 0 }} -->
<!-- 	on:load={({ detail }) => -->
<!-- 		applyMaterial( -->
<!-- 			detail.scene, -->
<!-- 			new MeshStandardMaterial({ -->
<!-- 				color: new Color(0xd08770), -->
<!-- 				wireframe: true -->
<!-- 			}) -->
<!-- 		)} -->
<!-- /> -->
