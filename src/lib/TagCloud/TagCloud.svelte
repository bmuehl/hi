<script lang="ts">
	import { tweened } from 'svelte/motion'
	import { expoIn } from 'svelte/easing'
	import { Canvas, T, Fog } from '@threlte/core'
	import type { Skill } from 'src/routes/experience/types'
	import ChevronUp from '$lib/Icon/icons/ChevronUp.svelte'
	import ChevronDown from '$lib/Icon/icons/ChevronDown.svelte'
	import Icon from '$lib/Icon/Icon.svelte'
	import Tag from './Tag.svelte'
	import TrackballControls from './TrackballControls.svelte'
	import { onMount } from 'svelte'
	import { fade } from 'svelte/transition'

	export let skills: Array<Skill> = []

	let cameraPositionZ = tweened(11, { duration: 1200, easing: expoIn })
	let loaded = false
	let active = false
	let start = false

	onMount(() => setTimeout(() => (start = true), 250))

	$: (async () => {
		if (loaded) {
			await cameraPositionZ.set(27)
			active = true
		}
	})()
</script>

<div
	class="tagcloud relative mx-auto flex h-[380px] max-w-[750px] items-center justify-center overflow-hidden md:h-[550px] md:overflow-visible"
>
	{#if start}
		<div class="flex h-full w-full" in:fade>
			<Canvas linear flat>
				<Fog color={0x2e3440} near={0} far={60} />
				<T.PerspectiveCamera makeDefault position={[0, 0, $cameraPositionZ]} />
				{#if active}
					<TrackballControls zoomSpeed={2} panSpeed={0} maxDistance={50} minDistance={4} />
				{/if}
				<T.AmbientLight intensity={0.75} />
				<T.DirectionalLight intensity={0.6} position={[-2, 3, 2]} />

				{#each skills as skill, index}
					<Tag
						text={skill.name}
						{index}
						{skills}
						length={skills.length}
						on:loaded={() => (loaded = true)}
					/>
				{/each}
			</Canvas>

			<div class="overlay">
				<Icon
					src={ChevronUp}
					size="l"
					class="icon left-0 top-0 translate-y-1 translate-x-1 -rotate-45"
				/>
				<Icon
					src={ChevronUp}
					size="l"
					class="icon right-0 top-0 translate-y-1 -translate-x-1 rotate-45"
				/>
				<Icon
					src={ChevronDown}
					size="l"
					class="icon left-0 bottom-0 -translate-y-1 translate-x-1 rotate-45"
				/>
				<Icon
					src={ChevronDown}
					size="l"
					class="icon right-0 bottom-0 -translate-y-1 -translate-x-1 -rotate-45"
				/>
			</div>
		</div>
	{/if}
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

		.tagcloud:focus {
			@apply outline-none md:outline-2 md:outline-nord3;
		}

		.tagcloud:hover .overlay,
		.tagcloud:focus .overlay,
		.tagcloud:active .overlay {
			@apply scale-95 opacity-100;
		}

		.tagcloud:hover .icon,
		.tagcloud:focus .icon,
		.tagcloud:active .icon {
			animation: bounce 1s infinite;
		}
	}

	@keyframes bounce {
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
