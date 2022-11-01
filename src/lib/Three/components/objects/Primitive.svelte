<script lang="ts">
	import * as THREE from 'three'
	import { setup } from '../../utils/context'
	import { transform } from '../../utils/object'
	import * as defaults from '../../utils/defaults'
	import { onFrame } from '$lib/Three/utils/lifecycle'
	import { mouse } from '$lib/Three/utils/store'
	import { createEventDispatcher, onDestroy } from 'svelte'

	export let object: THREE.Object3D

	export let position = defaults.position
	export let rotation = defaults.rotation
	export let scale = defaults.scale

	const { root, self } = setup(new THREE.Object3D())

	const dispatch = createEventDispatcher()

	let previous: THREE.Object3D

	const dispatchClickEvent = (e: MouseEvent) => {
		e.stopPropagation() // todo: this is not working

		if ($mouse.moved) {
			return
		}

		const intersects = $mouse.raycaster.intersectObject(self)
		if (intersects.length > 0) {
			dispatch('click', self)
		}
	}

	root.canvas.addEventListener('click', dispatchClickEvent)

	onDestroy(() => {
		root.canvas.removeEventListener('click', dispatchClickEvent)
	})

	onFrame(() => {
		const intersects = $mouse.raycaster.intersectObject(self)

		if (intersects.length > 0) {
			dispatch('pointerover', self)
		} else {
			dispatch('pointerout', self)
		}
	})

	$: {
		if (previous) {
			self.remove(previous)
		}

		if (object) {
			self.add(object)
		}

		previous = object
		root.invalidate()
	}

	$: {
		transform(self, position, rotation, scale)
		root.invalidate()
	}
</script>

{#if object}
	<slot />
{/if}
