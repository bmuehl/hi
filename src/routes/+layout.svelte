<script lang="ts">
	import '../styles/app.postcss'
	import PageTransition from '$lib/PageTransition/PageTransition.svelte'
	import type { LayoutData } from './$types'
	import Footer from '$lib/Footer/Footer.svelte'

	export let data: LayoutData
</script>

<div class="left-0 top-0 right-0 h-14 bg-nord1 mb-10 absolute shadow-lg z-10 bg-opacity-90" />

<PageTransition path={data.path}>
	<slot />
</PageTransition>

<Footer joke={data.joke} />
