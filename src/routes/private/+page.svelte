<script lang="ts">
	import Kbd from '$lib/Kbd/Kbd.svelte'
	import { clickOnKey } from '$lib/utils'
</script>

<h1>About Me</h1>

<a class="mt-6" use:clickOnKey data-sveltekit-prefetch href="/">top / <Kbd>Enter</Kbd></a>
