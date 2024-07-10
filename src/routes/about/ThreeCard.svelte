<script lang="ts">
	import Card from '$lib/Card/Card.svelte';
	import { Canvas, T } from '@threlte/core';
	import { NoToneMapping } from 'three';
	import { OrbitControls } from '@threlte/extras';
	import Spinner from '$lib/Spinner/Spinner.svelte';
	import type { Component, Snippet } from 'svelte';

	const {
		children,
		gltf,
		position,
		zoom,
		reverse = false
	}: {
		children: Snippet;
		position: [number, number, number];
		zoom: number;
		reverse?: boolean;
		gltf: Component;
	} = $props();
</script>

<Card class={`min-h-80 ${reverse && 'md:flex-row-reverse'}`}>
	{#snippet header()}
		<div class="h-72 rounded-lg bg-cat-surface0 md:h-auto">
			<Canvas toneMapping={NoToneMapping}>
				<!-- <Scene /> -->
				<T.PerspectiveCamera makeDefault {position} lookAt.y={0.5} {zoom}>
					<OrbitControls enableDamping autoRotate enableZoom={false} enablePan={false} />
				</T.PerspectiveCamera>

				<T.AmbientLight intensity={0.75} />
				<T.DirectionalLight intensity={0.6} position={[0, 10, 10]} />

				<svelte:component this={gltf}>
					{#snippet fallback()}
						<Spinner />
					{/snippet}
				</svelte:component>
			</Canvas>
		</div>
	{/snippet}

	{@render children()}
</Card>
