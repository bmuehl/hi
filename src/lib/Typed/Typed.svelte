<script lang="ts">
	import type { Snippet } from 'svelte';
	import Typed from 'typed.js';

	let { children, oncomplete }: { children: Snippet; oncomplete?: () => void } = $props();

	let mount: HTMLSpanElement;
	let text: HTMLSpanElement;

	$effect(() => {
		const typed = new Typed(mount, {
			stringsElement: text,
			onComplete: () => {
				if (oncomplete) {
					typed.cursor.remove();
					oncomplete();
				}
			},
			typeSpeed: 70,
			backDelay: 500
		});
		return () => typed.destroy();
	});
</script>

<span class="hidden" bind:this={text} contenteditable>{@render children()}</span>
<span bind:this={mount}></span>
