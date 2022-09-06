export function clickOnKey(element: HTMLElement, key = 'Enter') {
	function handleKeyPress(event: KeyboardEvent) {
		if (event.key === key) {
			element.focus()
			element.click()
		}
	}

	document.addEventListener('keypress', handleKeyPress)

	return {
		destroy() {
			document.removeEventListener('keypress', handleKeyPress)
		}
	}
}
