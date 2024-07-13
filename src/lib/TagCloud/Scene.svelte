<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	import Tag from './Tag.svelte';
	import { TrackballControls } from '@threlte/extras';
	import { Fog } from 'three';
	import { skills } from '$lib/store.svelte';
	import { interactivity } from '@threlte/extras';

	interactivity();

	const { scene } = useThrelte();
	scene.fog = new Fog(0x313244, 10, 60);
</script>

<T.PerspectiveCamera makeDefault position={[0, 0, 28]}>
	<TrackballControls
		zoomSpeed={2}
		panSpeed={0}
		maxDistance={50}
		minDistance={4}
		dynamicDampingFactor={0.1}
	/>
</T.PerspectiveCamera>

<T.AmbientLight intensity={0.75} />
<T.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />

{#each skills as skill, index}
	<Tag text={skill.name} {index} {skills} length={skills.length} />
{/each}
