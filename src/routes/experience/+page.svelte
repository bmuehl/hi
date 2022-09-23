<script lang="ts">
	import Kbd from '$lib/Kbd/Kbd.svelte'
	import Timeline from '$lib/Timeline/Timeline.svelte'
	import { clickOnKey } from '$lib/utils'
</script>

<h1 class="mb-8">Timeline</h1>

<Timeline />

<a class="mt-6" use:clickOnKey data-sveltekit-prefetch href="/skills">next / <Kbd>Enter</Kbd></a>
