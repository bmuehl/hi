<script lang="ts">
	import { goto } from '$app/navigation'
	import Kbd from '$lib/Kbd/Kbd.svelte'
	import { clickOnKey } from '$lib/utils'
	import { onSwipe } from '$lib/utils'

	export let href: string
	export let top = false
</script>

<a
	class="my-8 inline-flex items-center justify-center"
	use:clickOnKey={[' ']}
	data-sveltekit-preload-code="viewport"
	{href}
	use:onSwipe
	on:swipeleft={() => goto(href)}
>
	<span>{top ? 'to start' : 'next page'}</span>
	<span class="hidden md:inline-flex md:items-center">&nbsp;/&nbsp;<Kbd>Space</Kbd></span>
</a>
