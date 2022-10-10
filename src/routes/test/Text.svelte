<script lang="ts">
	import { camera, onFrame, Primitive } from '$lib/Three'
	import { onMount } from 'svelte'
	import { Text, preloadFont } from 'troika-three-text'
	import { setup } from '$lib/Three/utils/context'

	export let index: number

	export let length: number

	export let onSync: ((troika: Text) => void) | null = null

	export const radius = 18

	let content: string

	let element: Text

	const font = '/assets/fonts/fira-code-all-700-normal.woff'
	const characters = 'abcdefghijklmnopqrstuvwxyz'

	onMount(async () => {
		await loadFont()
		generateElement()
	})

	const { root } = setup()

	onFrame(() => {
		element?.quaternion.copy($camera.quaternion)
	})

	const loadFont = async () => new Promise((res) => preloadFont({ font, characters }, res))

	const generateElement = () => {
		element = new Text()
		element.text = content
		element.fontSize = 0.7
		element.font = font
		const position = computePosition()
		element.position.set(position[0], position[1], position[2])

		element.anchorX = 'center'
		element.anchorY = 'middle'

		element.sync(() => {
			root.invalidate()
			if (onSync) {
				onSync(element)
			}
		})
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

<!-- {#if element} -->
<Primitive object={element} />
<!-- {/if} -->
