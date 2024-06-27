<script lang="ts">
	import { goto } from '$app/navigation';
	import Kbd from '$lib/Kbd/Kbd.svelte';
	import Icon from '$lib/Icon/Icon.svelte';
	import DoubleTab from '$lib/Icon/icons/DoubleTab.svelte';
	import { clickOnKey } from '$lib/utils';
	import { onDoubleTap } from '$lib/utils';

	export let href: string;
	export let top = false;
</script>

<a
	class="my-4 inline-flex items-center justify-center"
	use:clickOnKey={[' ']}
	data-sveltekit-preload-code="viewport"
	{href}
	use:onDoubleTap
	ondbltap={() => goto(href)}
>
	<span>{top ? 'to start' : 'next page'}</span>
</a>
<div class="w-2"></div>
<span class="hidden md:inline-flex md:items-center"><Kbd>Space</Kbd></span>
<span class="inline-flex items-center md:hidden">
	<Kbd icon><Icon src={DoubleTab} size="md" /></Kbd>
</span>
