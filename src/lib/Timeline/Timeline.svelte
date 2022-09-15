<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte'
	import Phone from '$lib/Icon/icons/Phone.svelte'
	import InView from '$lib/InView/InView.svelte'
	import { blur, slide } from 'svelte/transition'

	let items = [
		{
			icon: Phone,
			time: 'Vienna, 2011',
			title: 'Technologisches Gewerbemuseum',
			description: 'Information Technology'
		},
		{
			icon: Phone,
			time: 'Vienna, 2012',
			title: 'Univsersity of Vienna',
			description: 'Bachelor of Psychology'
		},
		{
			icon: Phone,
			time: 'Vienna, March 2015 - Present',
			title: 'Vienna BioCenter Core Facilities',
			description: 'Software Engineer'
		},
		{
			icon: Phone,
			time: 'Vienna, April 2019 - Present',
			title: 'Hyke Systems',
			description: 'Web Developer'
		}
	]
</script>

<ol class="border-l border-gray-200 dark:border-gray-700">
	<InView>
		{#each items as item, i}
			<li class="mb-10 ml-6 relative">
				<span
					in:blur={{ delay: i * 800 }}
					class="flex absolute -left-9 justify-center items-center w-6 h-6 bg-nord15 rounded-full"
				>
					<Icon icon={item.icon} size="xs" />
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
