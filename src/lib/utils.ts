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
