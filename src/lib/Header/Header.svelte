<script lang="ts">
	import { clickOnKey } from '$lib/utils';
	import { store } from '$lib/store.svelte';
	import Icon from '$lib/Icon/Icon.svelte';
	import LinkedIn from '$lib/Icon/icons/LinkedIn.svelte';
	import GitHub from '$lib/Icon/icons/GitHub.svelte';
</script>

<header
	class="absolute left-0 right-0 top-0 z-10 h-14 overflow-x-auto border-b border-b-cat-overlay1 bg-cat-surface0"
>
	<div class="container mx-auto flex h-full justify-between">
		<div class="flex items-center">
			<div class="nav-item" class:active={store.value.currentPage === 'home'}>
				<a data-sveltekit-preload-code="viewport" href="/" use:clickOnKey={['h', 'H']}>
					<span class="key-binding">h</span>ome
				</a>
			</div>
			<div class="nav-item" class:active={store.value.currentPage === 'experience'}>
				<a data-sveltekit-preload-code="viewport" href="/experience" use:clickOnKey={['e', 'E']}>
					<span class="key-binding">e</span>xperience
				</a>
			</div>
			<div class="nav-item" class:active={store.value.currentPage === 'skills'}>
				<a data-sveltekit-preload-code="viewport" href="/skills" use:clickOnKey={['s', 'S']}>
					<span class="key-binding">s</span>kills
				</a>
			</div>
			<div class="nav-item" class:active={store.value.currentPage === 'me'}>
				<a data-sveltekit-preload-code="viewport" href="/me" use:clickOnKey={['A', 'a']}>
					<span class="key-binding">a</span>bout me
				</a>
			</div>
		</div>
		<div class="flex items-center">
			<div class="nav-item">
				<a
					href="https://www.linkedin.com/in/bernhard-m%C3%BChl-6008b31ab/"
					target="_blank"
					class="abase flex items-center"
				>
					<Icon size="md" src={LinkedIn} />
				</a>
			</div>
			<div class="nav-item">
				<a href="https://github.com/bmuehl" target="_blank" class="abase flex items-center">
					<Icon size="md" src={GitHub} />
				</a>
			</div>
		</div>
	</div>
</header>

<style lang="postcss">
	.nav-item {
		@apply flex h-full items-center justify-center whitespace-nowrap px-4;

		&.active {
			@apply bg-cat-surface1 bg-opacity-80;
		}
	}

	.key-binding {
		@apply border-b-2 border-cat-subtext0;
	}
</style>
