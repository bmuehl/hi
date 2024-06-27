// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	const __PROJECT_VERSION__: string;
}

declare module 'svelte/elements' {
	interface HTMLAttributes<T> {
		onenter?: (e: CustomEvent<T>) => void;
		onexit?: (e: CustomEvent<T>) => void;
		oncollision?: (e: CustomEvent<T>) => void;
		onswipeleft?: (e: CustomEvent<T>) => void;
		onswiperight?: (e: CustomEvent<T>) => void;
		ondbltap?: (e: CustomEvent<T>) => void;
	}
}

export {};
