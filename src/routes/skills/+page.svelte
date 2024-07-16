<script lang="ts">
	import Slider from '$lib/Slider/Slider.svelte';
	import TagCloud from '$lib/TagCloud/TagCloud.svelte';
	import Card from '$lib/Card/Card.svelte';
</script>

<svelte:head>
	<title>Bernhard Mühl | My Skills</title>
</svelte:head>

<div class="container hidden h-full grid-cols-[minmax(0,_1fr)_auto] lg:grid">
	<TagCloud />

	<div class="max-w-96">
		<Card class="h-full">
			{#snippet header()}
				<div class="flex flex-col overflow-hidden">
					<div class="h-6"></div>
					<Slider fadeOut={false} />
				</div>
			{/snippet}
		</Card>
	</div>
</div>

<div class="container lg:hidden">
	<div class="h-96">
		<TagCloud />
	</div>

	<div class="h-6"></div>

	<div class="overflow-hidden">
		<Slider />
	</div>
</div>
