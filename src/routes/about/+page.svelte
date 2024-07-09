<script lang="ts">
	import Spinner from '$lib/Spinner/Spinner.svelte';
	import { Canvas, T } from '@threlte/core';
	import Card from '$lib/Card/Card.svelte';
	import { NoToneMapping } from 'three';
	import Keyboard from './Keyboard.svelte';
	import { OrbitControls } from '@threlte/extras';
</script>

<!-- nord15: 0xb48ead -->
<!-- nord14: 0xa3be8c -->
<!-- nord13: 0xebcb8b -->
<!-- nord12: 0xd08770 -->
<!-- nord11: 0xbf616a -->
<!-- nord11: 0x2e3440 -->

<!-- TODO: add personal stuff like favourite color themer etc. -->
<!-- Idea for categories: NERD, MUSIC, SPORT  -->

<svelte:head>
	<title>Bernhard Mühl | My Self</title>
</svelte:head>

<div class="container px-4">
	<Card>
		{#snippet header()}
			<div class="rounded-lg bg-cat-surface0">
				<Canvas toneMapping={NoToneMapping}>
					<!-- <Scene /> -->
					<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.5} zoom={5}>
						<OrbitControls enableDamping autoRotate />
					</T.PerspectiveCamera>

					<T.AmbientLight intensity={0.75} />
					<T.DirectionalLight intensity={0.6} position={[0, 10, 10]} />

					<Keyboard>
						{#snippet fallback()}
							<Spinner />
						{/snippet}
					</Keyboard>
				</Canvas>
			</div>
		{/snippet}
		<h1 class="mb-4">Nerd.</h1>

		<p>Custom Keyboards, Homelab, 3d printing, you name it.</p>
		<p>nvim, color theme etc</p>
	</Card>
</div>
