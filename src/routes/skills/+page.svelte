<script lang="ts">
	import Slider from '$lib/Slider/Slider.svelte'
	import TagCloud from '$lib/TagCloud/TagCloud.svelte'
	import type { PageData } from './$types'
	import { clickOnKey } from '$lib/utils'
	import Kbd from '$lib/Kbd/Kbd.svelte'

	export let data: PageData
</script>

<h1>Experience</h1>
<div class="w-full">
	<TagCloud skills={data.skills} />
</div>
<Slider skills={data.skills} />

<a class="mt-6" use:clickOnKey data-sveltekit-prefetch href="/private">next / <Kbd>Enter</Kbd></a>
