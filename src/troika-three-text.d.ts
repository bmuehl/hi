declare module 'troika-three-text' {
	import type { Mesh } from 'three'

	export class Text extends Mesh {
		text? = ''
		anchorX?: number | string = 0
		anchorY?: number | string = 0
		curveRadius? = 0
		direction? = 'auto'
		font?: string
		fontSize? = 0.1
		letterSpacing? = 0
		lineHeight? = 'normal'
		maxWidth? = Infinity
		whiteSpace? = 'normal'
		material?: THREE.Material
		sync: () => void
		// TODO: add more properties
	}
}
