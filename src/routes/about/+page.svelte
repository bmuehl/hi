<script lang="ts">
	import Spinner from '$lib/Spinner/Spinner.svelte';
	import { Canvas, T } from '@threlte/core';
	import Card from '$lib/Card/Card.svelte';
	import { NoToneMapping } from 'three';
	import Keyboard from './Keyboard.svelte';
	import { OrbitControls } from '@threlte/extras';
	import Guitar from './Guitar.svelte';
	import Tennis from './Tennis.svelte';
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
	<div class="flex flex-col items-center gap-9">
		<Card>
			{#snippet header()}
				<div class="rounded-lg bg-cat-surface0">
					<Canvas toneMapping={NoToneMapping}>
						<!-- <Scene /> -->
						<T.PerspectiveCamera makeDefault position={[10, 5, 10]} lookAt.y={0.5} zoom={3}>
							<OrbitControls enableDamping autoRotate enableZoom={false} />
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
			<h1 class="mb-4">Tech</h1>

			<p>I&apos;m kind of a nerd.</p>

			<p>
				Whether it&apos;s keyboards, 3D printing or my homelab, I can spend hours tinkering with my
				&quot;smart&quot; home or my current programming setup.
			</p>
			<ul>
				<li>
					Keyboard: <a href="https://github.com/foostan/crkbd" target="_blank">Corne</a>
				</li>
				<li>Terminal: <a href="https://sw.kovidgoyal.net/kitty/" target="_blank">kitty</a></li>
				<li>Color Theme: <a href="https://catppuccin.com/" target="_blank">Catppuccin Mocha</a></li>
				<li>IDE: <a href="https://neovim.io/" target="_blank">nvim</a></li>
			</ul>
		</Card>

		<Card class="md:flex-row-reverse">
			{#snippet header()}
				<div class="rounded-lg bg-cat-surface0">
					<Canvas toneMapping={NoToneMapping}>
						<!-- <Scene /> -->
						<T.PerspectiveCamera makeDefault position={[10, 5, 80]} lookAt.y={0.5}>
							<OrbitControls enableDamping autoRotate enableZoom={false} />
						</T.PerspectiveCamera>

						<T.AmbientLight intensity={0.75} />
						<T.DirectionalLight intensity={0.6} position={[0, 10, 10]} />

						<Guitar>
							{#snippet fallback()}
								<Spinner />
							{/snippet}
						</Guitar>
					</Canvas>
				</div>
			{/snippet}
			<h1 class="mb-4">Music</h1>

			<p>I love music.</p>

			<p>
				Since I started school, my path has always been closely linked to music. I love playing the
				guitar and I love going to concerts. I still need to work on my singing, though.
			</p>
		</Card>

		<Card>
			{#snippet header()}
				<div class="rounded-lg bg-cat-surface0">
					<Canvas toneMapping={NoToneMapping}>
						<!-- <Scene /> -->
						<T.PerspectiveCamera makeDefault position={[10, 10, 800]} lookAt.y={50} zoom={1}>
							<OrbitControls enableDamping autoRotate enableZoom={false} />
						</T.PerspectiveCamera>

						<T.AmbientLight intensity={0.75} />
						<T.DirectionalLight intensity={0.6} position={[0, 10, 10]} />

						<Tennis>
							{#snippet fallback()}
								<Spinner />
							{/snippet}
						</Tennis>
					</Canvas>
				</div>
			{/snippet}
			<h1 class="mb-4">Sport</h1>

			<p>Let's get physical.</p>

			<p>
				In my free time I like to get out into the fresh air. Long hikes are very welcome,
				especially at the weekend. During the week a quick jog is enough. I have recently started
				playing tennis. However, there is a great need for improvement.
			</p>
		</Card>
	</div>
</div>
