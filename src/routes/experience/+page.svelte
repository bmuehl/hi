<script lang="ts">
	import Timeline from '$lib/Timeline/Timeline.svelte'
	import { clickOnKey } from '$lib/utils'
</script>

<h1 class="mb-8">Education / Experience</h1>

<Timeline />

<a use:clickOnKey data-sveltekit-prefetch href="/skills">next / ⏎</a>
