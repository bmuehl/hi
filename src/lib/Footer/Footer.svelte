<script lang="ts">
	import NextLink from '$lib/NextLink/NextLink.svelte';
	import { nextPage } from '$lib/utils';
	import { store } from '$lib/store.svelte';

	// eslint-disable-next-line no-undef
	const version = __PROJECT_VERSION__;
</script>

<footer class="absolute bottom-0 w-full">
	<div class="flex items-center justify-center border-t border-t-cat-overlay1 bg-cat-surface0">
		<NextLink href={`/${nextPage(store.value.currentPage)}`} />
	</div>
	<div class="border-t border-t-cat-overlay1 bg-cat-surface1 py-2">
		<div class="container">
			<div class="text-right text-xs text-cat-subtext0">
				cv.berni.cloud @ v{version}
			</div>
		</div>
	</div>
</footer>
