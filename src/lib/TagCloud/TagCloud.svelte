<script lang="ts">
	import { Canvas } from '@threlte/core';
	import ChevronUp from '$lib/Icon/icons/ChevronUp.svelte';
	import ChevronDown from '$lib/Icon/icons/ChevronDown.svelte';
	import Icon from '$lib/Icon/Icon.svelte';
	import { NoToneMapping } from 'three';
	import Scene from './Scene.svelte';
</script>

<div
	class="tagcloud relative mx-auto flex h-full w-full items-center justify-center overflow-hidden md:overflow-visible"
>
	<div class="flex h-full w-full">
		<Canvas toneMapping={NoToneMapping}>
			<Scene />
		</Canvas>

		<div class="overlay">
			<Icon
				src={ChevronUp}
				size="l"
				class="icon left-0 top-0 translate-x-1 translate-y-1 -rotate-45"
			/>
			<Icon
				src={ChevronUp}
				size="l"
				class="icon right-0 top-0 -translate-x-1 translate-y-1 rotate-45"
			/>
			<Icon
				src={ChevronDown}
				size="l"
				class="icon bottom-0 left-0 -translate-y-1 translate-x-1 rotate-45"
			/>
			<Icon
				src={ChevronDown}
				size="l"
				class="icon bottom-0 right-0 -translate-x-1 -translate-y-1 -rotate-45"
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	.overlay {
		@apply absolute bottom-0 left-0 right-0 top-0;
		@apply pointer-events-none scale-105 transition-all duration-300;
		@apply opacity-0;
	}

	:global {
		.overlay .icon {
			@apply absolute -m-6 items-center justify-center;
		}

		.tagcloud:focus {
			@apply outline-none md:outline-2 md:outline-cat-surface1;
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
