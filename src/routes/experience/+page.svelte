<script lang="ts">
	import InView from '$lib/InView/InView.svelte'
	import Timeline from '$lib/Timeline/Timeline.svelte'
	import { clickOnKey } from '$lib/utils'
	import { blur } from 'svelte/transition'
</script>

<InView>
	<h1 in:blur|local={{}} class="mb-8">Education / Experience</h1>
</InView>

<Timeline />

<a use:clickOnKey data-sveltekit-prefetch href="/skills">next / ⏎</a>
