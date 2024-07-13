<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte';
	import AcademicCap from '$lib/Icon/icons/AcademicCap.svelte';
	import Briefcase from '$lib/Icon/icons/Briefcase.svelte';
	import InView from '$lib/InView/InView.svelte';
	import Card from '$lib/Card/Card.svelte';
	import { blur, slide } from 'svelte/transition';
	import { experience } from '$lib/store.svelte';
	import { tick } from 'svelte';
	import Chip from '$lib/Chip/Chip.svelte';

	let showDetailsId: number | undefined = $state(undefined);
	let loading = $state(true);
	const delayInMs = 800;
	const offset = 500;

	const onHover = (i: number) => {
		showDetailsId = i;
	};

	$effect(() => {
		const timeout = setTimeout(
			() => {
				loading = false;
				if (showDetailsId === undefined) {
					onHover(0);
				}
			},
			(experience.length + 1) * delayInMs
		);

		return () => clearTimeout(timeout);
	});
</script>

<ol class="mx-4 border-l border-cat-overlay0">
	<InView>
		{#each experience as item, i}
			{#await tick() then}
				<li
					class="group relative ml-8 pb-10"
					onmouseover={() => onHover(i)}
					onfocus={() => onHover(i)}
				>
					<span
						in:blur={{ delay: i * delayInMs }}
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
						in:slide={{ delay: i * delayInMs + offset }}
						class="transition-transform group-hover:translate-x-5"
					>
						<time class="mb-1 text-sm leading-none text-cat-subtext0">
							{item.place}, {item.startDate.getFullYear()} - {item.endDate
								? item.endDate.getFullYear()
								: 'Present'}
						</time>
						<h3 class="text-lg">{item.title}</h3>
						<p class="mb-4 text-base text-cat-overlay1">{item.description}</p>
						{#if showDetailsId === i && !loading}
							<div transition:slide class="w-80 md:w-96">
								<Card>
									{#snippet header()}
										<div class="ml-4 p-4">
											<ul class="list-[square] text-sm">
												{#each item.bullets as bullet}
													<li>{bullet}</li>
												{/each}
											</ul>
											{#if item.skills.length > 0}
												<div class="h-4"></div>
												<div class="flex flex-wrap gap-2">
													{#each item.skills as skill}
														<Chip>{skill}</Chip>
													{/each}
												</div>
											{/if}
										</div>
									{/snippet}
								</Card>
							</div>
						{/if}
					</div>
				</li>
			{/await}
		{/each}
	</InView>
</ol>
