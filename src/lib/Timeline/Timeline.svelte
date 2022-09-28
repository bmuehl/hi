<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte'
	import AcademicCap from '$lib/Icon/icons/AcademicCap.svelte'
	import Briefcase from '$lib/Icon/icons/Briefcase.svelte'
	import InView from '$lib/InView/InView.svelte'
	import { blur, slide } from 'svelte/transition'

	let items = [
		{
			category: 'education',
			time: 'Vienna, 2006 - 2011',
			title: 'Technologisches Gewerbemuseum',
			description: 'Information Technology',
			status: 'done'
		},
		{
			category: 'education',
			time: 'Vienna, 2012 - Present',
			title: 'Univsersity of Vienna',
			description: 'Bachelor of Psychology',
			status: 'waiting'
		},
		{
			category: 'work',
			time: 'Vienna, 2015 - Present',
			title: 'Vienna BioCenter Core Facilities',
			description: 'Software Engineer',
			status: 'in-progress'
		},
		{
			category: 'work',
			time: 'Vienna, 2019 - Present',
			title: 'Hyke Systems',
			description: 'Web Developer',
			status: 'in-progress'
		}
	]
</script>

<ol class="border-l border-gray-200 dark:border-gray-700 mx-4">
	<InView>
		{#each items as item, i}
			<li class="mb-10 ml-8 relative">
				<span
					in:blur={{ delay: i * 800 }}
					class="flex absolute -left-[49px] justify-center items-center w-8 h-8 rounded-full"
					class:bg-nord14={item.status === 'done'}
					class:bg-nord13={item.status === 'waiting'}
					class:bg-nord12={item.status === 'in-progress'}
				>
					<Icon class="text-nord0" src={item.category === 'education' ? AcademicCap : Briefcase} />
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
