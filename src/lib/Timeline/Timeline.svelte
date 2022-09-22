<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte'
	import AcademicCap from '$lib/Icon/icons/AcademicCap.svelte'
	import Briefcase from '$lib/Icon/icons/Briefcase.svelte'
	import InView from '$lib/InView/InView.svelte'
	import { blur, slide } from 'svelte/transition'

	let items = [
		{
			icon: AcademicCap,
			category: 'education',
			time: 'Vienna, 2011',
			title: 'Technologisches Gewerbemuseum',
			description: 'Information Technology'
		},
		{
			icon: AcademicCap,
			category: 'education',
			time: 'Vienna, 2012',
			title: 'Univsersity of Vienna',
			description: 'Bachelor of Psychology'
		},
		{
			icon: Briefcase,
			category: 'experience',
			time: 'Vienna, March 2015 - Present',
			title: 'Vienna BioCenter Core Facilities',
			description: 'Software Engineer'
		},
		{
			icon: Briefcase,
			category: 'experience',
			time: 'Vienna, April 2019 - Present',
			title: 'Hyke Systems',
			description: 'Web Developer'
		}
	]
</script>

<ol class="border-l border-gray-200 dark:border-gray-700">
	<InView>
		{#each items as item, i}
			<li class="mb-10 ml-8 relative">
				<span
					in:blur={{ delay: i * 800 }}
					class="flex absolute -left-[49px] justify-center items-center w-8 h-8 rounded-full"
					class:bg-nord10={item.category === 'education'}
					class:bg-nord15={item.category === 'experience'}
				>
					<Icon class="text-nord0" src={item.icon} />
				</span>
				<div in:slide={{ delay: i * 800 + 500 }}>
					<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						{item.time}
					</time>
					<h3 class="text-lg font-semibold">{item.title}</h3>
					<p class="mb-4 text-base font-normal">{item.description}</p>
				</div>
			</li>
		{/each}
	</InView>
</ol>
