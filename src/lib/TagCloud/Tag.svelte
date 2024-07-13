<script lang="ts">
	import { useThrelte, useTask } from '@threlte/core';
	import { Text, useCursor, type IntersectionEvent } from '@threlte/extras';
	import { Color, MeshBasicMaterial } from 'three';
	import { tweened } from 'svelte/motion';
	import { type Skill, store } from '$lib/store.svelte';
	import { get } from 'svelte/store';

	type TextMesh = Text['$$prop_def']['ref'];

	type Props = {
		text: string;
		length: number;
		index: number;
		skills: Array<Skill>;
		onclick?: (text: TextMesh) => void;
	};

	let { text, length, index, skills, onclick }: Props = $props();

	let textObject: TextMesh = $state(undefined);

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
		if (store.value.activeSkill && textObject) {
			return textObject.text === store.value.activeSkill.name;
		}
		return false;
	};

	useTask(() => {
		if (textObject) {
			textObject.quaternion.copy(get(camera).quaternion);
			const material = textObject.material as MeshBasicMaterial;
			const focused = isFocused();
			material.color.lerp(color.set(get(hovering) || focused ? '#a6e3a1' : 'white'), 0.1);
			fontSize.set(get(hovering) || focused ? 1.2 : 0.85);
		}
	});

	const clickHandler = (e: IntersectionEvent<MouseEvent>) => {
		e.stopPropagation();
		const textObject = e.object as TextMesh;
		const skill = skills.find((s) => s.name === textObject?.text);
		if (skill) {
			store.update({ focusSkill: skill.id });
		}
		if (onclick) {
			onclick(textObject);
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
	onpointerenter={(e: Event) => {
		e.stopPropagation();
		$hovering = true;
	}}
	onpointerleave={() => ($hovering = false)}
	onclick={clickHandler}
/>
