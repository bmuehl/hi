declare module 'troika-three-text' {
	import type { Mesh } from 'three'

	export function preloadFont(
		{ font: string, characters: string },
		callback: (params: unknown) => void
	)

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
		material: THREE.MeshBasicMaterial
		color?: THREE.Color | string | number
		outlineWidth?: number | string = 0
		outlineColor?: string | number | THREE.Color = 0x000000
		outlineOpacity?: number = 1
		strokeWidth?: number | string = 0
		strokeColor?: string | number | THREE.Color = 0x808080
		strokeOpacity?: number = 1
		sync: (troika: () => void) => void
		// TODO: add more properties
	}
}
