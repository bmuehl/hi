<script lang="ts">
	import { useThrelte, useTask } from '@threlte/core';
	import { Text, useCursor } from '@threlte/extras';
	import { Color, MeshBasicMaterial } from 'three';
	import { tweened } from 'svelte/motion';
	import { type Skill, store } from '$lib/store.svelte';
	import { get } from 'svelte/store';

	type Props = {
		text: string;
		length: number;
		index: number;
		skills: Array<Skill>;
		onloaded: () => void;
	};

	let { text, length, index, skills, onloaded }: Props = $props();

	let textObject: Text | undefined = $state(undefined);

	const font = '/assets/fonts/JetBrainsMono-Medium.ttf';
	const fontSize = tweened(0.85, { duration: 200 });
	const radius = 20;

	const color = new Color();

	const { camera } = useThrelte();
	const { hovering } = useCursor('pointer');

	const computePosition = () => {
		const phi = Math.acos(-1 + (2 * index + 1) / length);
		const theta = Math.sqrt((length + 1) * Math.PI) * phi;
		return [
			(radius * Math.cos(theta) * Math.sin(phi)) / 2,
			(radius * Math.sin(theta) * Math.sin(phi)) / 2,
			(radius * Math.cos(phi)) / 2
		];
	};

	const isFocused = () => {
		if (store.value.focusSkill && textObject) {
			return textObject.text === skills.find((s) => s.id === store.value.focusSkill)?.name;
		}
		return false;
	};

	useTask(() => {
		if (textObject) {
			textObject.quaternion.copy(get(camera).quaternion);
			const material = textObject.material as MeshBasicMaterial;
			const focused = isFocused();
			material.color.lerp(color.set(get(hovering) || focused ? '#a3be8c' : 'white'), 0.1);
			fontSize.set(get(hovering) || focused ? 1 : 0.85);
		}
	});

	const clickHandler = (e: Text) => {
		e.stopPropagation();
		const skill = skills.find((s) => s.name === e.object.text);
		if (skill) {
			store.update({ focusSkill: skill.id });
		}
	};
</script>

<Text
	bind:ref={textObject}
	{text}
	{font}
	fontSize={$fontSize}
	position={computePosition()}
	anchorX="center"
	anchorY="middle"
	interactive
	on:pointerenter={(e) => {
		e.stopPropagation();
		$hovering = true;
	}}
	on:pointerleave={() => ($hovering = false)}
	on:click={clickHandler}
	on:sync={() => (skills.length === index + 1 ? onloaded() : null)}
/>
