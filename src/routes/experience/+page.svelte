<script lang="ts">
	import Slider from '$lib/Slider/Slider.svelte'
	import TagCloud from '$lib/TagCloud/TagCloud.svelte'
	import type { PageData } from './$types'
	import NextLink from '$lib/NextLink/NextLink.svelte'

	export let data: PageData
</script>

<svelte:head>
	<title>Bernhard Mühl | My Experience</title>
</svelte:head>

<div class="w-full">
	<TagCloud skills={data.skills} />
</div>

<Slider skills={data.skills} />

<NextLink href="/me" />
