<script lang="ts">
	const range = (size: number, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);

	let duration = 0.3;
</script>

<div class="wrapper">
	{#each range(3, 1) as version}
		<div class="circle" style="animation-delay: {(duration / 3) * (version - 1) + duration};"></div>
	{/each}
</div>

<style lang="postcss">
	.wrapper {
		@apply h-8 w-8;
	}
	.circle {
		@apply h-8 w-8 bg-cat-blue;
		border-radius: 100%;
		animation-fill-mode: both;
		position: absolute;
		opacity: 0;
		animation: bounce 0.3s linear infinite;
	}
	@keyframes bounce {
		0% {
			opacity: 0;
			transform: scale(0);
		}
		5% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: scale(1);
		}
	}
</style>
