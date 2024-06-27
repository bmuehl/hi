<script lang="ts">
	import Slider from '$lib/Slider/Slider.svelte';
	import TagCloud from '$lib/TagCloud/TagCloud.svelte';
	import Card from '$lib/Card/Card.svelte';
</script>

<svelte:head>
	<title>Bernhard Mühl | My Skills</title>
</svelte:head>

<div class="container grid h-full grid-cols-[minmax(0,_1fr)_auto]">
	<TagCloud />

	<div class="hidden max-w-96 lg:block">
		<Card>
			{#snippet header()}
				<div class="flex flex-col overflow-hidden">
					<div class="h-6"></div>
					<Slider />
				</div>
			{/snippet}
		</Card>
	</div>
</div>
