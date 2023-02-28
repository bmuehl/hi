declare namespace svelte.JSX {
	interface HTMLProps<T> {
		onenter?: (e: CustomEvent<T>) => void
		onexit?: (e: CustomEvent<T>) => void
		oncollision?: (e: CustomEvent<T>) => void
		onswipeleft?: (e: CustomEvent<T>) => void
		onswiperight?: (e: CustomEvent<T>) => void
		ondbltap?: (e: CustomEvent<T>) => void
	}
}
