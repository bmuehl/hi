<script lang="ts">
	import Icon from '$lib/Icon/Icon.svelte'
	import ChevronRight from '$lib/Icon/icons/ChevronRight.svelte'
	import { clickOnKey } from '$lib/utils'

	export let path: string
	let active: string

	$: active = path.split('/')[1] || 'home'
</script>

<header>
	<div class="wrapper">
		<div class="nav-item" class:active={active === 'home'}>
			<a data-sveltekit-prefetch href="/" use:clickOnKey={['h', 'H']}>
				<span class="key-binding">h</span>ome
			</a>
		</div>
		<div class="mx-4 flex items-center">
			<Icon src={ChevronRight} />
		</div>
		<div class="nav-item" class:active={active === 'experience'}>
			<a data-sveltekit-prefetch href="/experience" use:clickOnKey={['t', 'T']}>
				<span class="key-binding">t</span>imeline
			</a>
		</div>
		<div class="mx-4 flex items-center">
			<Icon src={ChevronRight} />
		</div>
		<div class="nav-item" class:active={active === 'skills'}>
			<a data-sveltekit-prefetch href="/skills" use:clickOnKey={['e', 'E']}>
				<span class="key-binding">e</span>xperience
			</a>
		</div>
		<div class="mx-4 flex items-center">
			<Icon src={ChevronRight} />
		</div>
		<div class="nav-item" class:active={active === 'private'}>
			<a data-sveltekit-prefetch href="/private" use:clickOnKey={['A', 'a']}>
				<span class="key-binding">a</span>bout me
			</a>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		@apply absolute left-0 top-0 right-0 z-10 h-14 overflow-x-auto bg-nord1 bg-opacity-90 shadow-lg;
	}

	.wrapper {
		@apply container mx-auto flex h-full items-center justify-start md:justify-around;
	}

	.nav-item {
		@apply flex h-full items-center justify-center whitespace-nowrap px-4;

		&.active {
			@apply bg-nord0 bg-opacity-90 shadow-inner;
		}
	}

	.key-binding {
		@apply border-b-2 border-nord3;
	}
</style>
