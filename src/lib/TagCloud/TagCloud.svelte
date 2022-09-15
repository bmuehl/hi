<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'
	import TagCloud from 'TagCloud'
	import type { Event } from 'three'
	import Icon from '$lib/Icon/Icon.svelte'
	import ChevronDown from '$lib/Icon/icons/ChevronDown.svelte'
	import ChevronUp from '$lib/Icon/icons/ChevronUp.svelte'
	import type { Skill } from 'src/routes/skills/types'
	import { skillsKey } from '$lib/context'
	import { browser } from '$app/environment'

	let tagCloud: HTMLDivElement

	const tagClick = (e: Event) => {
		if (e.target.className === 'tagcloud--item') {
			alert(e.target.innerText)
		}
	}

	const skills = getContext<Skill[]>(skillsKey)

	onMount(() => {
		const texts = skills.map((s) => s.name)
		const options = {
			radius: tagCloud.clientWidth / 2,
			keep: false,
			initSpeed: 'fast',
			maxSpeed: 'fast'
		}

		TagCloud(tagCloud, texts, options)

		document.addEventListener('click', tagClick)
	})

	onDestroy(() => {
		if (browser) {
			document.removeEventListener('click', tagClick)
		}
	})
</script>

<div
	bind:this={tagCloud}
	class="tagcloud relative mx-auto max-w-[500px] overflow-hidden md:overflow-visibles"
	tabindex="0"
>
	<div class="overlay">
		<Icon
			icon={ChevronUp}
			size="l"
			class="icon left-0 top-0 translate-y-1 translate-x-1 -rotate-45"
		/>
		<Icon
			icon={ChevronUp}
			size="l"
			class="icon right-0 top-0 translate-y-1 -translate-x-1 rotate-45"
		/>
		<Icon
			icon={ChevronDown}
			size="l"
			class="icon left-0 bottom-0 -translate-y-1 translate-x-1 rotate-45"
		/>
		<Icon
			icon={ChevronDown}
			size="l"
			class="icon right-0 bottom-0 -translate-y-1 -translate-x-1 -rotate-45"
		/>
	</div>
</div>

<style lang="postcss">
	.overlay {
		@apply absolute left-0 right-0 top-0 bottom-0;
		@apply pointer-events-none scale-105 transition-all duration-300;
		@apply opacity-0;
	}

	:global {
		.overlay .icon {
			@apply absolute -m-6 items-center justify-center;
		}

		div.tagcloud:focus {
			@apply outline-none md:outline-2 md:outline-nord3;
		}

		div.tagcloud:hover > .overlay,
		div.tagcloud:focus > .overlay,
		div.tagcloud:active > .overlay {
			@apply scale-95 opacity-100;
		}

		div.tagcloud:hover .icon,
		div.tagcloud:focus .icon,
		div.tagcloud:active .icon {
			animation: bounce2 1s infinite;
		}

		span.tagcloud--item {
			@apply select-none antialiased hover:cursor-pointer hover:rounded-md hover:bg-nord14 hover:p-2 hover:text-nord0;
		}
	}

	@keyframes bounce2 {
		0%,
		100% {
			transform: translateY(var(--tw-translate-y)) translateX(var(--tw-translate-x))
				rotate(var(--tw-rotate));
			opacity: 0.5;
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			transform: translateY(0) translateX(0) rotate(var(--tw-rotate));
			opacity: 1;
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}
</style>
