<script lang="ts">
	import '../app.css';
	import PageTransition from '$lib/PageTransition/PageTransition.svelte';
	import type { LayoutData } from './$types';
	import Footer from '$lib/Footer/Footer.svelte';
	import Header from '$lib/Header/Header.svelte';
	import { store } from '$lib/store.svelte';
	import { pathToPage } from '$lib/utils';
	import type { Snippet } from 'svelte';

	const { data, children }: { data: LayoutData; children: Snippet } = $props();

	store.update({ currentPage: pathToPage(data.path) });
</script>

<Header />

<PageTransition path={data.path}>
	{@render children()}
</PageTransition>

<Footer />
