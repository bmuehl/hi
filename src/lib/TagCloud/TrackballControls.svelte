<script lang="ts">
	import * as THREE from 'three'
	import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
	import { createEventDispatcher } from 'svelte'
	import { useFrame, useThrelte } from '@threlte/core'

	export let dynamicDampingFactor = 0.1
	export let enabled = true
	export let maxDistance = Infinity
	export let minDistance = 0

	export let mouseButtons = {
		LEFT: THREE.MOUSE.ROTATE,
		MIDDLE: THREE.MOUSE.DOLLY,
		RIGHT: THREE.MOUSE.PAN
	}
	export let panSpeed = 1
	export let rotateSpeed = 1
	export let zoomSpeed = 1

	export let target = [0, 0, 0]

	const { camera, renderer } = useThrelte()
	const dispatch = createEventDispatcher()

	let controls: TrackballControls

	controls = new TrackballControls($camera, renderer?.domElement)

	controls.addEventListener('start', (e) => {
		dispatch('start', e)
	})

	controls.addEventListener('end', (e) => {
		dispatch('end', e)
	})

	controls.addEventListener('change', (e) => {
		dispatch('change', e)

		if (
			!target ||
			controls.target.x !== target[0] ||
			controls.target.y !== target[1] ||
			controls.target.z !== target[2]
		) {
			target = [controls.target.x, controls.target.y, controls.target.z]
		}
	})

	useFrame(() => {
		if (controls) {
			controls.update()
		}
	})

	$: if (
		target &&
		(controls.target.x !== target[0] ||
			controls.target.y !== target[1] ||
			controls.target.z !== target[2])
	) {
		controls.target.set(target[0], target[1], target[2])

		controls.update()
	}

	$: if (controls) {
		controls.enabled = enabled
		controls.maxDistance = maxDistance
		controls.minDistance = minDistance
		controls.mouseButtons = mouseButtons
		controls.panSpeed = panSpeed
		controls.rotateSpeed = rotateSpeed
		controls.zoomSpeed = zoomSpeed
		controls.dynamicDampingFactor = dynamicDampingFactor

		controls.update()
	}
</script>
