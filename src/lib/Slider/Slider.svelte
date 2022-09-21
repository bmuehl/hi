<script lang="ts">
	import type { Skill } from 'src/routes/skills/types'
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { onCollision } from '$lib/utils'

	export let skills: Array<Skill> = []

	let slides: HTMLDivElement
	let slider: HTMLDivElement
	let collider: HTMLDivElement
	let description = '-'
	let activeSlide: string | null
	const progress = tweened(0, { duration: 500, easing: cubicOut })
	const speed = 18

	const setActiveSlide = (id: string, value: string) => {
		activeSlide = id
		description = value
	}

	const setSlideFocus = (id: string, value: string) => {
		const slide = slides.querySelector<HTMLDivElement>(`[data-slideId="${id}"]`)

		if (slide) {
			progress.set(slide.offsetLeft - slides.offsetWidth / 2 + slide.clientWidth / 2)
			setActiveSlide(value, value)
		}
	}

	onMount(() => {
		progress.subscribe((value) => {
			if (slides) {
				slides.scrollLeft = value
			}
		})

		const updateProgress = async () => {
			if (slides) {
				if (document.activeElement !== slider) {
					await progress.set(slides.scrollLeft + speed)
				}
			}
		}

		const loop = () => {
			if (slides) {
				if (slides.scrollWidth / 2 - slides.clientWidth <= slides.scrollLeft - slides.clientWidth) {
					progress.set(0, { duration: 0 })
				}

				if (document.activeElement !== slider) {
					updateProgress()
				}
			}
			requestAnimationFrame(loop)
		}
		loop()
	})
</script>

<div class="slider" bind:this={slider} tabindex="0">
	<div class="collider" bind:this={collider} />
	<div class="slides" bind:this={slides}>
		{#each skills as skill, i}
			<div
				class="slide"
				class:active={activeSlide === skill.name + `-${i}`}
				on:click={() => setSlideFocus(skill.name + `-${i}`, skill.name)}
				data-slideId={skill.name + `-${i}`}
				use:onCollision={{ collider }}
				on:collision={() => setActiveSlide(skill.name + `-${i}`, skill.name)}
			>
				<img src={skill.logo} alt={skill.name} class="max-h-[80px] w-auto" />
			</div>
		{/each}
	</div>
</div>

<div class="description">{description}</div>

<style lang="postcss">
	.slider {
		@apply relative flex w-screen flex-col;
		@apply before:left-0 before:bg-gradient-to-r after:right-0 after:bg-gradient-to-l;

		&::before,
		&::after {
			@apply absolute top-0 bottom-0 z-10 w-20 from-nord0 to-transparent content-[''] md:w-60;
			@apply pointer-events-none;
			--tw-gradient-to: rgba(46, 52, 64, 0); /* fix for safari */
		}
	}

	.slides {
		@apply pointer-events-none flex w-full overflow-y-hidden overflow-x-scroll;
		/* animation: 30s linear 0s infinite normal none running slide; */
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
		@apply pointer-events-auto flex w-[160px] flex-shrink-0 items-center justify-center px-10 py-6;

		img {
			@apply max-h-[80px] w-full cursor-pointer select-none object-contain transition-transform hover:scale-150;
		}

		&.active img {
			@apply scale-150;
		}
	}

	.description {
		@apply my-4 flex items-center justify-center;
	}

	@keyframes slide {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
