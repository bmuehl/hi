<script lang="ts">
	import Slider from '$lib/Slider/Slider.svelte'
	import TagCloud from '$lib/TagCloud/TagCloud.svelte'
	import type { PageData } from './$types'
	import NextLink from '$lib/NextLink/NextLink.svelte'

	export let data: PageData
</script>

<h1 class="mb-2">Experience</h1>

<div class="w-full">
	<TagCloud skills={data.skills} />
</div>

<Slider skills={data.skills} />

<NextLink href="/private" />
