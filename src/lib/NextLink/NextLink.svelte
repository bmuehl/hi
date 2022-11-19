<script lang="ts">
	import Kbd from '$lib/Kbd/Kbd.svelte'
	import { clickOnKey } from '$lib/utils'

	export let href: string
	export let top = false
</script>

<a
	class="my-8 inline-flex items-center justify-center"
	use:clickOnKey={[' ']}
	data-sveltekit-prefetch
	{href}
>
	<span>{top ? 'top' : 'next'}</span>
	<span class="hidden md:inline-flex">&nbsp;/&nbsp;<Kbd>Space</Kbd></span>
</a>
