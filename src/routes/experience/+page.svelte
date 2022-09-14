<script lang="ts">
	import InView from '$lib/InView/InView.svelte'
	import { clickOnKey } from '$lib/utils'
	import { blur } from 'svelte/transition'
</script>

<InView>
	<h1 transition:blur={{}}>Experience</h1>
</InView>

<a use:clickOnKey data-sveltekit-prefetch href="/skills">next / ⏎</a>
