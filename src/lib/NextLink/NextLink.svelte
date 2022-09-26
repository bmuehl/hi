<script lang="ts">
	import Kbd from '$lib/Kbd/Kbd.svelte'
	import { clickOnKey } from '$lib/utils'

	export let href: string
	export let top = false
</script>

<a class="mt-6 flex items-center justify-center" use:clickOnKey data-sveltekit-prefetch {href}>
	<span>{top ? 'top' : 'next'}</span>
	<span class="hidden md:inline-flex">&nbsp;/&nbsp;<Kbd>Enter</Kbd></span>
</a>
