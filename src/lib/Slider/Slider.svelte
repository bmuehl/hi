<script lang="ts">
	import type { Skill } from '$routes/experience/types'
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { inView, onCollision } from '$lib/utils'
	import { activeSkill, focusSkill } from '$lib/store'
	import Rating from '$lib/Rating/Rating.svelte'
	import Icon from '$lib/Icon/Icon.svelte'
	import Pause from '$lib/Icon/icons/Pause.svelte'
	import Play from '$lib/Icon/icons/Play.svelte'
	import { slide } from 'svelte/transition'
	import ArrowTopRightOnSquare from '$lib/Icon/icons/ArrowTopRightOnSquare.svelte'

	export let skills: Array<Skill> = []

	let slides: HTMLDivElement
	let collider: HTMLDivElement
	const speed = 1.5
	let showControlDescription = false

	const focusTransition = tweened(0, { duration: 500, easing: cubicOut })

	const setActiveSlide = (id: number) => {
		const skill = skills.find((s) => s.id === id)
		if (skill) {
			activeSkill.set(skill)
		}
	}

	const setSlideFocus = (id: number | false) => {
		if (!slides || !id) {
			return
		}

		const slide = slides.querySelector<HTMLDivElement>(`[data-slideId="${id}"]`)

		if (slide) {
			focusTransition.set(slides.scrollLeft, { duration: 0 })
			focusTransition.set(slide.offsetLeft - slides.offsetWidth / 2 + slide.clientWidth / 2)
			focusTransition.subscribe((value) => {
				if (slides) {
					slides.scrollLeft = value
				}
			})
			setActiveSlide(id)
			if (document.activeElement !== slide) {
				slide.focus()
			}
		}
	}

	const collisionHandler = (id: number) => {
		if (!$focusSkill) {
			setActiveSlide(id)
		}
	}

	const swapNodes = (e: CustomEvent) => {
		const node = e.target as HTMLDivElement
		const id = Number(node.dataset.slideid) - skills.length
		const slide = slides.querySelector<HTMLDivElement>(`[data-slideId="${id}"]`)
		if (slide) {
			swap(slide, node)
		}
	}

	function swap(node1: HTMLElement, node2: HTMLElement) {
		const afterNode1 = node1.nextElementSibling
		node2.replaceWith(node1)
		slides.insertBefore(node2, afterNode1)
	}

	function focusCurrent() {
		if (!$focusSkill) {
			$focusSkill = $activeSkill?.id
		}
	}

	onMount(() => {
		const loop = () => {
			if (slides) {
				if (slides.scrollWidth / 2 - slides.clientWidth <= slides.scrollLeft - slides.clientWidth) {
					slides.scrollLeft = 0
				}

				if (document.activeElement?.parentElement !== slides) {
					if ($focusSkill) {
						$focusSkill = false
					}
					slides.scrollLeft += speed
				}
			}
			requestAnimationFrame(loop)
		}
		loop()
	})

	$: $focusSkill, setSlideFocus($focusSkill)
</script>

<div class="slider">
	<div class="collider" bind:this={collider} />
	<div class="slides" bind:this={slides}>
		{#each { length: skills.length * 2 } as _, i}
			{#if i < skills.length}
				{@const skill = skills[i]}
				<menuitem
					tabindex="0"
					class="slide"
					class:active={$activeSkill?.id === skill.id}
					on:click={() => ($focusSkill = skill.id)}
					data-slideId={skill.id}
					use:onCollision={{ collider }}
					on:collision={() => collisionHandler(skill.id)}
				>
					<img src={skill.logo} alt={skill.name} />
				</menuitem>
			{:else}
				{@const skill = skills[i - skills.length]}
				<div class="slide" data-slideId={i + 1} use:inView={{ threshold: 0 }} on:enter={swapNodes}>
					<img src={skill.logo} alt={skill.name} />
				</div>
			{/if}
		{/each}
	</div>
	<div
		class="absolute bottom-0 right-2 z-20 flex items-center md:h-full"
		class:opacity-40={!$focusSkill}
	>
		<button
			class="flex items-center"
			on:click={focusCurrent}
			on:mouseenter={() => (showControlDescription = true)}
			on:mouseleave={() => (showControlDescription = false)}
			on:focus={() => (showControlDescription = true)}
			on:blur={() => (showControlDescription = false)}
		>
			{#if showControlDescription}
				<span transition:slide class="text-sm">{$focusSkill ? 'Play' : 'Pause'}</span>
			{/if}
			<Icon src={$focusSkill ? Play : Pause} />
		</button>
	</div>
</div>

<div class="description">
	<div class="header">
		<strong class="text-lg">{$activeSkill?.name}</strong>
		{#if $activeSkill?.url}
			<div class="flex items-center">
				<a
					href={$activeSkill.url}
					target="_blank"
					rel="noopener noreferrer"
					class="ml-1 flex items-center text-xs"
				>
					open website
					<Icon src={ArrowTopRightOnSquare} size="xs" class="ml-1 text-nord10" />
				</a>
			</div>
		{/if}
	</div>
	<hr class="w-full border-t border-nord3" />
	<div class="content h-20">
		<span class="my-2 text-center text-sm">{$activeSkill?.experience || '-'}</span>
	</div>
	<hr class="w-full border-t border-nord3" />
	<div class="footer">
		<Rating score={$activeSkill?.score || 0} />
	</div>
</div>

<style lang="postcss">
	.slider {
		@apply relative flex w-screen flex-col;
		@apply max-w-7xl before:left-0 before:bg-gradient-to-r after:right-0 after:bg-gradient-to-l;

		&::before,
		&::after {
			@apply absolute top-0 bottom-0 z-10 w-20 from-nord0 to-transparent content-[''] md:w-60;
			@apply pointer-events-none;
			--tw-gradient-to: rgba(46, 52, 64, 0); /* fix for safari */
		}
	}

	.slides {
		@apply flex w-full overflow-y-hidden overflow-x-scroll py-2;
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
	}

	.collider {
		@apply absolute left-1/2 h-full w-[1px] bg-transparent;
	}

	.slides::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}

	.slide {
		@apply pointer-events-auto flex h-[160px] w-[170px] flex-shrink-0 cursor-pointer items-center justify-center rounded-3xl p-7 transition-colors duration-200;

		img {
			@apply h-full w-full select-none object-contain transition-transform duration-300;
			@apply scale-0;
			--tw-scale-x: 0.6;
			--tw-scale-y: 0.6;
		}

		&.active {
			@apply bg-nord1 bg-opacity-50;
		}

		&:hover img,
		&.active img {
			@apply scale-100;
		}
	}

	.description {
		@apply mt-6 flex w-full max-w-3xl flex-col rounded-lg;

		.header {
			@apply flex flex-col items-center justify-center p-3;
		}

		.content {
			@apply flex items-center justify-center p-4;
		}

		.footer {
			@apply flex items-center justify-center p-3;
		}
	}
</style>
