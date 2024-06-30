<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte';
	import Mail from '$lib/Icon/icons/Mail.svelte';
	import Home from '$lib/Icon/icons/Home.svelte';
	import Download from '$lib/Icon/icons/Download.svelte';
	import Card from '$lib/Card/Card.svelte';
	import Typed from '$lib/Typed/Typed.svelte';

	let intro = $state(true);
</script>

<svelte:head>
	<title>Bernhard Mühl | My Info</title>
</svelte:head>

<div class="container mx-auto md:flex md:h-full md:items-center md:justify-center">
	<div class="flex max-w-5xl flex-col gap-9 md:flex-row md:gap-12">
		<img
			src="./assets/me.jpg"
			alt="Berni Portrait"
			class="h-56 w-56 rounded-full transition-opacity duration-300"
			class:opacity-0={intro}
			class:opacity-1={!intro}
		/>
		<div>
			<h1 class="text-6xl"><Typed oncomplete={() => (intro = false)}>Hi, I'm Berni.</Typed></h1>
			<div class:opacity-0={intro} class:opacity-1={!intro} class="transition-opacity duration-300">
				<p class="my-6 text-xl text-cat-subtext0">
					Enthusiastic Software Engineer with a passion for<br />Web Development and creating stuff.
				</p>
				<div class="flex flex-col items-start gap-10">
					<div class="flex text-base text-cat-green">
						I'm always looking for new job opportunities or interesting projects.<br />
						If you have any ideas / questions or just want to get in touch, don&apos;t be scared to contact
						me :)
					</div>

					<Card>
						<div class="mb-4 flex items-center">
							<Icon src={Mail} />
							<a href="mailto:bernhard.muehl@gmail.com" class="ml-4">bernhard.muehl@gmail.com</a>
						</div>
						<div class="mb-4 flex items-center">
							<Icon src={Home} />
							<span class="ml-4">Vienna, Austria</span>
						</div>
						<div class="flex items-center">
							<Icon src={Download} />
							<a href="./assets/cv.pdf" class="ml-4" target="_blank">Download CV</a>
						</div>
					</Card>
				</div>
			</div>
		</div>
	</div>
</div>
