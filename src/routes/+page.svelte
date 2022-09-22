<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte'
	import Mail from '$lib/Icon/icons/Mail.svelte'
	import Home from '$lib/Icon/icons/Home.svelte'
	import Phone from '$lib/Icon/icons/Phone.svelte'
	import Cake from '$lib/Icon/icons/Cake.svelte'
	import Card from '$lib/Card/Card.svelte'
	import { clickOnKey } from '$lib/utils'
	import Kbd from '$lib/Kbd/Kbd.svelte'
</script>

<div class="flex flex-col">
	<div>
		<h1>Bernhard Mühl</h1>
		<p class="mb-6">Full Stack Developer / Software Architect</p>

		<Card>
			<div class="flex flex-col items-start">
				<div class="mb-4 flex items-center">
					<Icon src={Mail} />
					<a href="mailto:bernhard.muehl@gmail.com" class="ml-4">bernhard.muehl@gmail.com</a>
				</div>
				<div class="mb-4 flex items-center">
					<Icon src={Phone} />
					<a href="tel:+436605090135" class="ml-4">+43 660 50 90 135</a>
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

			<div class="flex text-xs mt-6 text-nord7 max-w-sm">
				I'm currently looking for a new job opportunity.<br />
				If you have any questions or want to get in touch, feel free to contact me. :&#41;
			</div>
		</Card>
	</div>
</div>

<a class="mt-6" use:clickOnKey data-sveltekit-prefetch href="/experience">
	next / <Kbd>Enter</Kbd>
</a>
