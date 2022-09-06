<script lang="ts">
	import { skillsKey } from '$lib/context'
	import { setContext } from 'svelte'
	import Slider from '$lib/Slider/Slider.svelte'
	import TagCloud from '$lib/TagCloud/TagCloud.svelte'
	import type { PageData } from './$types'
	import { clickOnKey } from '$lib/utils'

	export let data: PageData

	setContext(skillsKey, data.skills)
</script>

<h1>Skills</h1>
<div class="mt-5 w-full">
	<TagCloud />
</div>
<Slider />

<a use:clickOnKey data-sveltekit-prefetch href="/private">next / ⏎</a>
