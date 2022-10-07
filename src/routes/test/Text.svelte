<script lang="ts">
	import { camera, onFrame, Primitive } from '$lib/Three'
	import { onMount } from 'svelte'
	import { Text } from 'troika-three-text'

	export let index: number

	export let length: number

	export const radius = 18

	let content: string

	let element: Text

	onMount(() => generateElement())

	onFrame(() => {
		if (element) {
			element.quaternion.copy($camera.quaternion)
		}
	})

	const generateElement = () => {
		element = new Text()
		element.text = content
		element.fontSize = 0.7
		element.font = './node_modules/@fontsource/fira-code/files/fira-code-all-400-normal.woff'
		const position = computePosition()
		element.position.set(position[0], position[1], position[2])

		element.anchorX = 'center'
		element.anchorY = 'middle'
		element.sync()
	}

	const computePosition = () => {
		const phi = Math.acos(-1 + (2 * index + 1) / length)
		const theta = Math.sqrt((length + 1) * Math.PI) * phi
		return [
			(radius * Math.cos(theta) * Math.sin(phi)) / 2,
			(radius * Math.sin(theta) * Math.sin(phi)) / 2,
			(radius * Math.cos(phi)) / 2
		]
	}
</script>

<span class="hidden" contenteditable bind:textContent={content}><slot /></span>

{#if element}
	<Primitive object={element} />
{/if}
