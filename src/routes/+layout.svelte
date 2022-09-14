<script lang="ts">
	import '../styles/app.postcss'
	import PageTransition from '$lib/PageTransition/PageTransition.svelte'
	import type { LayoutData } from './$types'
	import Footer from '$lib/Footer/Footer.svelte'

	export let data: LayoutData
</script>

<PageTransition path={data.path}>
	<slot />
</PageTransition>

<Footer joke={data.joke} />
