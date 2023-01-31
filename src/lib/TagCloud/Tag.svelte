<script lang="ts">
	import { useFrame, type ThreltePointerEvent } from '@threlte/core'
	import { Text } from '@threlte/extras'
	import type { Text as TextType } from '@threlte/extras/dist/types/types'
	import { Vector3, Color, MeshBasicMaterial } from 'three'
	import { focusSkill } from '$lib/store'
	import { tweened } from 'svelte/motion'
	import type { Skill } from '$routes/experience/types'
	import { createEventDispatcher } from 'svelte'
	import { get } from 'svelte/store'

	export let text: string
	export let length: number
	export let index: number
	export let skills: Array<Skill> = []

	let textObject: TextType

	const dispatch = createEventDispatcher()

	const font = '/assets/fonts/fira-code-all-700-normal.woff'
	const fontSize = tweened(0.85, { duration: 200 })
	const radius = 18

	let hovered = false

	const color = new Color()

	const computePosition = () => {
		const phi = Math.acos(-1 + (2 * index + 1) / length)
		const theta = Math.sqrt((length + 1) * Math.PI) * phi
		return new Vector3(
			(radius * Math.cos(theta) * Math.sin(phi)) / 2,
			(radius * Math.sin(theta) * Math.sin(phi)) / 2,
			(radius * Math.cos(phi)) / 2
		)
	}

	useFrame(({ camera }) => {
		if (textObject) {
			textObject.quaternion.copy(get(camera).quaternion)
			const material = textObject.material as MeshBasicMaterial
			material.color.lerp(color.set(hovered ? '#a3be8c' : 'white'), 0.1)
		}
	})

	const clickHandler = (e: CustomEvent<ThreltePointerEvent>) => {
		e.stopPropagation()
		const skill = skills.find((s) => s.name === (e.detail.object as TextType).text)
		if (skill) {
			focusSkill.set(skill.id)
		}
	}

	const onHovered = () => {
		document.body.style.cursor = hovered ? 'pointer' : 'auto'
		fontSize.set(hovered ? 1 : 0.85)
	}

	$: hovered, onHovered()
</script>

<Text
	{text}
	bind:textObject
	{font}
	fontSize={$fontSize}
	position={computePosition()}
	anchorX="center"
	anchorY="middle"
	interactive
	on:sync={() => (skills.length === index + 1 ? dispatch('loaded') : null)}
	on:pointerenter={(e) => {
		e.stopPropagation()
		hovered = true
	}}
	on:pointerleave={() => (hovered = false)}
	on:click={clickHandler}
/>
