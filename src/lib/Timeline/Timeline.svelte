<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte';
	import AcademicCap from '$lib/Icon/icons/AcademicCap.svelte';
	import Briefcase from '$lib/Icon/icons/Briefcase.svelte';
	import Plus from '$lib/Icon/icons/Plus.svelte';
	import Minus from '$lib/Icon/icons/Minus.svelte';
	import InView from '$lib/InView/InView.svelte';
	import Card from '$lib/Card/Card.svelte';
	import { blur, slide } from 'svelte/transition';
	import { experience } from '$lib/store.svelte';
	import { tick } from 'svelte';
	import Chip from '$lib/Chip/Chip.svelte';
	import { formatDate } from '$lib/utils';

	let showDetailsId: number | undefined = $state(undefined);
	let loading = $state(true);
	const delayInMs = 800;
	const offset = 500;

	const onHover = (i: number) => {
		if (showDetailsId === undefined) {
			return;
		}
		showDetailsId = i;
	};

	$effect(() => {
		const timeout = setTimeout(
			() => {
				loading = false;
				if (showDetailsId === undefined) {
					showDetailsId = 0;
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
						style="overflow: hidden;"
						class="relative pr-9 transition-transform group-hover:translate-x-5"
					>
						<button
							class="absolute right-0.5 top-0.5 flex items-center justify-center p-1 text-cat-overlay0 transition-opacity duration-300"
							class:opacity-0={loading}
							class:opacity-1={!loading}
							onclick={() => (showDetailsId = showDetailsId === i ? undefined : i)}
						>
							{#if showDetailsId === i}
								<Icon src={Minus} />
							{:else}
								<Icon src={Plus} />
							{/if}
						</button>
						<time class="mb-1 text-sm leading-none text-cat-subtext0">
							{item.place}, {formatDate(item.startDate)} - {item.endDate
								? formatDate(item.endDate)
								: 'Present'}
						</time>
						<h3 class="text-lg">{item.title}</h3>
						<p class="mb-4 text-base text-cat-overlay1">{item.description}</p>
						{#if showDetailsId === i && !loading}
							<div transition:slide style="overflow: hidden;" class="w-80 md:w-96">
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
