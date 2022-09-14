<script>
	import Icon from '$lib/Icon/Icon.svelte'
	import LockClosed from '$lib/Icon/icons/LockClosed.svelte'
	import { randomNumberBetween } from '$lib/utils'
	import { onMount } from 'svelte'

	const imageDefault = 'me.svg'
	const imageEyesClosed = 'me-eyes-closed.svg'

	let image = imageDefault

	function blink() {
		setTimeout(() => {
			image = imageEyesClosed
			setTimeout(() => {
				image = imageDefault
				blink()
			}, randomNumberBetween(150, 300))
		}, randomNumberBetween(2000, 5000))
	}

	onMount(() => blink())
</script>

<div class="shadow-lg">
	<div class="flex flex-col overflow-hidden rounded-lg bg-nord1 md:flex-row">
		<div class="h-full md:max-h-64 bg-[#adefd1]">
			<img src={`./assets/${image}`} class="md:object-cover mx-auto" alt="card" />
		</div>
		<div class="relative">
			<div class="p-8 sm:p-9 md:p-7 xl:p-9">
				<slot />
			</div>
			<div class="absolute bottom-5 right-5 flex items-center">
				<button>
					<Icon icon={LockClosed} />
				</button>
			</div>
		</div>
	</div>
</div>
