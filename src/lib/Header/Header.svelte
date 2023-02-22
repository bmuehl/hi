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
			<a data-sveltekit-preload-code="viewport" href="/" use:clickOnKey={['h', 'H']}>
				<span class="key-binding">h</span>ome
			</a>
		</div>
		<div class="mx-4 flex items-center">
			<Icon src={ChevronRight} />
		</div>
		<div class="nav-item" class:active={active === 'timeline'}>
			<a data-sveltekit-preload-code="viewport" href="/timeline" use:clickOnKey={['t', 'T']}>
				<span class="key-binding">t</span>imeline
			</a>
		</div>
		<div class="mx-4 flex items-center">
			<Icon src={ChevronRight} />
		</div>
		<div class="nav-item" class:active={active === 'experience'}>
			<a data-sveltekit-preload-code="viewport" href="/experience" use:clickOnKey={['e', 'E']}>
				<span class="key-binding">e</span>xperience
			</a>
		</div>
		<div class="mx-4 flex items-center">
			<Icon src={ChevronRight} />
		</div>
		<div class="nav-item" class:active={active === 'me'}>
			<a data-sveltekit-preload-code="viewport" href="/me" use:clickOnKey={['A', 'a']}>
				<span class="key-binding">a</span>bout me
			</a>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		@apply absolute left-0 top-0 right-0 z-10 h-14 overflow-x-auto;
	}

	.wrapper {
		@apply container mx-auto flex h-full items-center justify-start md:justify-around;
	}

	.nav-item {
		@apply flex h-full items-center justify-center whitespace-nowrap px-4;

		&.active {
			@apply bg-nord1 bg-opacity-80 rounded-b-lg;
		}
	}

	.key-binding {
		@apply border-b-2 border-nord3;
	}
</style>
