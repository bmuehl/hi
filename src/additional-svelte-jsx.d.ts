declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onenter?: (e: CustomEvent<T>) => void
		onexit?: (e: CustomEvent<T>) => void
	}
}
