<script>
	import { inView } from '$lib/utils'
	export let threshold = 0.5
	let animated = false
</script>

<div
	use:inView={{ threshold }}
	on:enter={() => (animated = true)}
	on:exit={() => (animated = false)}
>
	{#if animated}
		<slot />
	{/if}
</div>
