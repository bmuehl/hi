<script lang="ts">
	import Keyboard from './Keyboard.svelte';
	import Guitar from './Guitar.svelte';
	import Tennis from './Tennis.svelte';
	import ThreeCard from './ThreeCard.svelte';
</script>

<svelte:head>
	<title>Bernhard Mühl | My Self</title>
</svelte:head>

<div class="container px-4">
	<div class="flex flex-col items-center gap-9">
		<ThreeCard position={[10, 5, 10]} zoom={3} gltf={Keyboard}>
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
		</ThreeCard>

		<ThreeCard position={[5, 30, 5]} zoom={6} gltf={Guitar} reverse>
			<h1 class="mb-4">Music</h1>

			<p>I love music.</p>

			<p>
				Since I started school, my path has always been closely linked to music. I love playing the
				guitar and I love going to concerts. I still need to work on my singing, though.
			</p>
		</ThreeCard>

		<ThreeCard position={[10, 10, 800]} zoom={1} gltf={Tennis}>
			<h1 class="mb-4">Sport</h1>

			<p>Let's get physical.</p>

			<p>
				In my free time I like to get out into the fresh air. Long hikes are very welcome,
				especially at the weekend. During the week a quick jog is enough. I have recently started
				playing tennis. However, there is a great need for improvement.
			</p>
		</ThreeCard>
	</div>
</div>
