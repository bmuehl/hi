<script lang="ts">
	import { skillsKey } from '$lib/context'
	import type { Skill } from 'src/routes/skills/types'
	import { getContext, onMount } from 'svelte'

	const skills = getContext<Skill[]>(skillsKey)
	let slides: HTMLDivElement

	onMount(() => {
		const loop = () => {
			if (slides) {
				slides.scrollLeft += 2

				if (slides.scrollWidth / 2 - slides.clientWidth <= slides.scrollLeft - slides.clientWidth) {
					slides.scrollLeft = 0
				}
			}
			requestAnimationFrame(loop)
		}
		loop()
	})
</script>

<div class="slider">
	<div class="slides" bind:this={slides}>
		{#each skills as skill}
			<div class="slide">
				<img src={skill.logo} alt={skill.name} class="w-full" />
			</div>
		{/each}

		{#each skills as skill}
			<div class="slide">
				<img src={skill.logo} alt={skill.name} class="w-full" />
			</div>
		{/each}
	</div>

	<div class="description">Description</div>
</div>

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
		@apply flex w-full overflow-y-hidden overflow-x-scroll;
		/* animation: 30s linear 0s infinite normal none running slide; */
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
		scrollbar-width: none; /* for Firefox */
	}

	.slides::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}

	.slide {
		@apply flex w-[160px] flex-shrink-0 items-center justify-center p-10;

		img {
			@apply cursor-pointer select-none transition-transform hover:scale-150;
		}
	}

	.description {
		@apply flex items-center justify-center;
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
