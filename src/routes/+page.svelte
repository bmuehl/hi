<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte';
	import Mail from '$lib/Icon/icons/Mail.svelte';
	import Home from '$lib/Icon/icons/Home.svelte';
	import Cake from '$lib/Icon/icons/Cake.svelte';
	import Card from '$lib/Card/Card.svelte';
</script>

<svelte:head>
	<title>Bernhard Mühl | My Info</title>
</svelte:head>

<div class="flex h-full items-center">
	<div class="-mt-12">
		<h1>Bernhard Mühl</h1>
		<p class="mb-6 text-cat-subtext0">Senior Software Engineer</p>

		<Card src="./assets/me.jpg" alt="Bernhard Mühl Portrait">
			<div class="flex flex-col items-start">
				<div class="mb-4 flex items-center">
					<Icon src={Mail} />
					<a href="mailto:bernhard.muehl@gmail.com" class="ml-4">bernhard.muehl@gmail.com</a>
				</div>
				<div class="mb-4 flex items-center">
					<Icon src={Home} />
					<span class="ml-4">Vienna, Austria</span>
				</div>
				<div class="flex items-center">
					<Icon src={Cake} />
					<span class="ml-4">January, 13th</span>
				</div>
			</div>

			<div class="mt-8 flex max-w-sm text-sm text-cat-green">
				I'm always looking for new job opportunities or interesting projects.<br /><br />
				If you have any ideas / questions or just want to get in touch, don&apos;t be scared to contact
				me :)
			</div>
		</Card>
	</div>
</div>
