<script lang="ts">
	import type { Snippet } from 'svelte';
	import Typed from 'typed.js';

	let { children, oncomplete }: { children: Snippet; oncomplete?: () => void } = $props();

	let mount: HTMLSpanElement;
	let text: HTMLSpanElement;

	$effect(() => {
		const typed = new Typed(mount, {
			strings: [text.innerText],
			onComplete: () => {
				if (oncomplete) {
					oncomplete();
				}
			},
			typeSpeed: 80
		});
		return () => typed.destroy();
	});
</script>

<span class="hidden" bind:this={text} contenteditable>{@render children()}</span>
<span bind:this={mount}></span>
