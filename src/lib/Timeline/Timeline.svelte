<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte'
	import Phone from '$lib/Icon/icons/Phone.svelte'
	import InView from '$lib/InView/InView.svelte'
	import { blur } from 'svelte/transition'
</script>

<ol class="border-l border-gray-200 dark:border-gray-700">
	<InView>
		<li in:blur={{ delay: 200 }} class="mb-10 ml-6 relative">
			<span
				class="flex absolute -left-9 justify-center items-center w-6 h-6 bg-nord15 rounded-full"
			>
				<Icon icon={Phone} size="xs" />
			</span>
			<time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
				>Vienna, 2011</time
			>
			<h3 class="text-lg font-semibold">Technologisches Gewerbemuseum</h3>
			<p class="mb-4 text-base font-normal">Information Technology</p>
		</li>
	</InView>
</ol>
