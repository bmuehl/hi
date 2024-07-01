<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte';
	import AcademicCap from '$lib/Icon/icons/AcademicCap.svelte';
	import Briefcase from '$lib/Icon/icons/Briefcase.svelte';
	import InView from '$lib/InView/InView.svelte';
	import Card from '$lib/Card/Card.svelte';
	import { blur, slide } from 'svelte/transition';
	import { linear } from 'svelte/easing';
	import { experience } from '$lib/store.svelte';
	import { tick } from 'svelte';

	let showDetailsId = $state(0);

	function workaroundDelay({
		delay,
		duration = 300,
		easing = linear
	}: {
		delay: number;
		duration?: number;
		easing?: (t: number) => number;
	}) {
		let virtual_duration = delay + duration;
		let threshold = delay / virtual_duration;
		return {
			duration: virtual_duration,
			easing: (t: number) => (t < threshold ? 0 : easing((t - threshold) / (1 - threshold)))
		};
	}
</script>

<ol class="mx-4 border-l border-cat-overlay0">
	<InView>
		{#each experience as item, i}
			{#await tick() then}
				<li
					class="group relative ml-8 pb-10 hover:cursor-pointer"
					onmouseover={() => (showDetailsId = i)}
					onfocus={() => (showDetailsId = i)}
				>
					<span
						in:blur={workaroundDelay({ delay: i * 800 })}
						class="absolute -left-[49px] flex h-8 w-8 items-center justify-center rounded-full transition-transform group-hover:scale-150"
						class:bg-cat-green={item.status === 'done'}
						class:bg-cat-yellow={item.status === 'waiting'}
						class:bg-cat-peach={item.status === 'progress'}
					>
						<Icon
							class="text-cat-surface0"
							src={item.category === 'education' ? AcademicCap : Briefcase}
						/>
					</span>
					<div
						in:slide={workaroundDelay({ delay: i * 800 + 500 })}
						class="transition-transform group-hover:translate-x-5"
					>
						<time class="mb-1 text-sm leading-none text-cat-subtext0">
							{item.place}, {item.startDate.getFullYear()} - {item.endDate
								? item.endDate.getFullYear()
								: 'Present'}
						</time>
						<h3 class="text-lg">{item.title}</h3>
						<p class="mb-4 text-base text-cat-overlay1">{item.description}</p>
						{#if showDetailsId === i}
							<div transition:slide class="w-80 md:w-96">
								<Card>
									<ul class="list-[square] text-sm">
										{#each item.bullets as bullet}
											<li>{bullet}</li>
										{/each}
									</ul>
								</Card>
							</div>
						{/if}
					</div>
				</li>
			{/await}
		{/each}
	</InView>
</ol>
