import { onDestroy } from 'svelte'

export function clickOnKey(element: HTMLElement, key = 'Enter') {
	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === key) {
			event.preventDefault()
			element.focus()
		}
	}

	function handleKeyUp(event: KeyboardEvent) {
		if (event.key === key) {
			event.preventDefault()
			element.click()
		}
	}

	document.addEventListener('keydown', handleKeyDown)
	document.addEventListener('keyup', handleKeyUp)

	return {
		destroy() {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}
}

export function randomNumberBetween(min = 0, max = 1) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export function onInterval(callback: () => void, milliseconds: number) {
	const interval = setInterval(callback, milliseconds)

	onDestroy(() => {
		clearInterval(interval)
	})
}
