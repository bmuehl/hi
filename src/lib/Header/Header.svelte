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
		<a
			data-sveltekit-prefetch
			href="/"
			use:clickOnKey={['h', 'H']}
			class="nav-item"
			class:active={active === 'home'}
		>
			<span class="key-binding">h</span>ome
		</a>
		<span><Icon src={ChevronRight} /></span>
		<a
			data-sveltekit-prefetch
			href="/experience"
			use:clickOnKey={['t', 'T']}
			class="nav-item"
			class:active={active === 'experience'}
		>
			<span class="key-binding">t</span>imeline
		</a>
		<span><Icon src={ChevronRight} /></span>
		<a
			data-sveltekit-prefetch
			href="/skills"
			use:clickOnKey={['e', 'E']}
			class="nav-item"
			class:active={active === 'skills'}
		>
			<span class="key-binding">e</span>xperience
		</a>
		<span><Icon src={ChevronRight} /></span>
		<a
			data-sveltekit-prefetch
			href="/private"
			use:clickOnKey={['A', 'a']}
			class="nav-item"
			class:active={active === 'private'}
		>
			<span class="key-binding">a</span>bout me
		</a>
	</div>
</header>

<style lang="postcss">
	header {
		@apply absolute left-0 top-0 right-0 z-10 mb-10 h-14 bg-nord1 bg-opacity-90 shadow-lg;
	}

	.wrapper {
		@apply container mx-auto flex h-full items-center justify-around;
	}

	.nav-item {
		@apply rounded-xl py-3 px-7;

		&.active {
			@apply bg-nord0 bg-opacity-90 shadow-inner;
		}
	}

	.key-binding {
		@apply border-b-2 border-nord3;
	}
</style>
