<script>
	import Icon from '$lib/Icon/Icon.svelte'
	import LockClosed from '$lib/Icon/icons/LockClosed.svelte'
	import { onInterval, randomNumberBetween } from '$lib/utils'

	const imageDefault = 'me.svg'
	const imageEyesClosed = 'me-eyes-closed.svg'

	let image = imageDefault

	function blink() {
		image = imageEyesClosed
		setTimeout(() => {
			image = imageDefault
		}, randomNumberBetween(150, 350))
	}

	onInterval(() => blink(), randomNumberBetween(1500, 5000))
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
