<script lang="ts">
	import Slider from '$lib/Slider/Slider.svelte'
	import TagCloud from '$lib/TagCloud/TagCloud.svelte'
	import type { PageData } from './$types'
	import { clickOnKey } from '$lib/utils'

	export let data: PageData
</script>

<h1>Skills</h1>
<div class="w-full">
	<TagCloud skills={data.skills} />
</div>
<Slider skills={[...data.skills, ...data.skills]} />

<a use:clickOnKey data-sveltekit-prefetch href="/private">next / ⏎</a>
