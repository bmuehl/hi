<script lang="ts">
	import '../styles/app.postcss'
	import PageTransition from '$lib/PageTransition/PageTransition.svelte'
	import type { LayoutData } from './$types'
	import Footer from '$lib/Footer/Footer.svelte'
	import Header from '$lib/Header/Header.svelte'

	export let data: LayoutData

	const version = __VERSION__ // TODO: fix lint error
</script>

<Header path={data.path} />

<PageTransition path={data.path}>
	<slot />
</PageTransition>

<Footer joke={data.joke} {version} />
