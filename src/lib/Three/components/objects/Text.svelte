<script lang="ts">
	import { camera, onFrame, Primitive } from '$lib/Three'
	import { onMount } from 'svelte'
	import { Text, preloadFont } from 'troika-three-text'
	import { setup } from '$lib/Three/utils/context'
	import * as THREE from 'three'
	import { focusSkill } from '$lib/store'
	import type { Skill } from '../../../../routes/skills/types'
	import { tweened } from 'svelte/motion'
	import { expoIn } from 'svelte/easing'

	export let index: number

	export let length: number

	export let onSync: ((troika: Text) => void) | null = null

	export let skills: Array<Skill> = []

	export const radius = 18

	let content: string

	let element: Text

	const font = '/assets/fonts/fira-code-all-700-normal.woff'
	const characters = 'abcdefghijklmnopqrstuvwxyz'

	const color = new THREE.Color()

	let hovered = false

	let fontSize = tweened(0.85, { duration: 200 })

	onMount(async () => {
		await loadFont()
		generateElement()
	})

	const { root } = setup()

	onFrame(() => {
		if (element) {
			element.quaternion.copy($camera.quaternion)
			element.material.color.lerp(color.set(hovered ? '#a3be8c' : 'white'), 0.1)
			element.fontSize = $fontSize
		}

		root.invalidate()
	})

	const loadFont = async () => new Promise((res) => preloadFont({ font, characters }, res))

	const generateElement = () => {
		element = new Text()
		element.text = content
		element.fontSize = $fontSize
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

	const clickHandler = () => {
		const skill = skills.find((s) => s.name === content)
		if (skill) {
			focusSkill.set(skill.id)
		}
	}

	$: hovered, (document.body.style.cursor = hovered ? 'pointer' : 'auto')

	$: hovered, fontSize.set(hovered ? 1 : 0.85)
</script>

<span class="hidden" contenteditable bind:textContent={content}><slot /></span>

<Primitive
	object={element}
	on:pointerover={() => (hovered = true)}
	on:pointerout={() => (hovered = false)}
	on:click={clickHandler}
/>
