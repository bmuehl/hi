<script lang="ts">
	import type { Skill } from 'src/routes/skills/types'
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { inView, onCollision } from '$lib/utils'
	import { activeSkill, focusSkill } from '$lib/store'
	import Rating from '$lib/Rating/Rating.svelte'

	export let skills: Array<Skill> = []

	let slides: HTMLDivElement
	let slider: HTMLDivElement
	let collider: HTMLDivElement
	const progress = tweened(0, { duration: 500, easing: cubicOut })
	const speed = 10

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
			if (document.activeElement !== slide) {
				slide.focus()
			}
			progress.set(slide.offsetLeft - slides.offsetWidth / 2 + slide.clientWidth / 2)
			setActiveSlide(id)
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

	onMount(() => {
		progress.subscribe((value) => {
			if (slides) {
				slides.scrollLeft = value
			}
		})

		const updateProgress = () => {
			if ($focusSkill) {
				$focusSkill = false
			}
			progress.set(slides.scrollLeft + speed)
		}

		const loop = () => {
			if (slides) {
				if (slides.scrollWidth / 2 - slides.clientWidth <= slides.scrollLeft - slides.clientWidth) {
					progress.set(0, { duration: 0 })
				}

				if (document.activeElement?.parentElement !== slides) {
					updateProgress()
				}
			}
			requestAnimationFrame(loop)
		}
		loop()
	})

	$: $focusSkill, setSlideFocus($focusSkill)
</script>

<div class="slider" bind:this={slider}>
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
					<img src={skill.logo} alt={skill.name} class="max-h-[80px] w-auto" />
				</menuitem>
			{:else}
				<div class="slide" data-slideId={i + 1} use:inView={{ threshold: 0 }} on:enter={swapNodes}>
					{i + 1}
				</div>
			{/if}
		{/each}
	</div>
</div>

<div class="description">
	<strong class="mb-1">{$activeSkill?.name}</strong>
	<span class="text-sm mb-2">{$activeSkill?.experience || '-'}</span>
	<Rating score={$activeSkill?.score || 0} />
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
		@apply pointer-events-none flex w-full overflow-y-hidden overflow-x-scroll py-2;
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
		@apply pointer-events-auto flex w-[170px] flex-shrink-0 cursor-pointer items-center justify-center rounded-3xl px-14 py-10 transition-colors duration-200;

		img {
			@apply max-h-[80px] w-full select-none object-contain transition-transform duration-300;
		}

		&.active {
			@apply bg-nord1 bg-opacity-50;
		}

		&:hover img,
		&.active img {
			@apply scale-150;
			--tw-scale-x: 1.8;
			--tw-scale-y: 1.8;
		}
	}

	.description {
		@apply mt-6 flex flex-col items-center justify-center;
	}
</style>
