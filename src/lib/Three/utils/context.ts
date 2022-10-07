import { getContext, setContext, onDestroy } from 'svelte'
import type { RootContext } from '../types/context'

const ROOT = {}
const PARENT = {}

export function setup<T>(self: T | null = null): {
	root: RootContext
	parent: THREE.Object3D
	self: T
} {
	const root = getContext<RootContext>(ROOT)
	const parent = getContext<THREE.Object3D>(PARENT) || root.scene

	if (self) {
		setContext(PARENT, self)

		parent.add(self)

		onDestroy(() => {
			parent.remove(self)
			root.invalidate()
		})
	}

	return {
		root,
		parent,
		self
	}
}

function get_root(): RootContext {
	return getContext(ROOT)
}

export function set_root(context: RootContext) {
	setContext(ROOT, context)
	return context
}

export function getInvalidator() {
	return get_root().invalidate
}

export function getCapabilities() {
	return get_root().renderer.capabilities
}
