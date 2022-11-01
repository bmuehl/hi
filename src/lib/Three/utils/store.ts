import { writable } from 'svelte/store'
import type { Camera } from 'three'
import * as THREE from 'three'

export type Mouse = {
	raycaster: THREE.Raycaster
	moved: boolean
}

export const camera = writable<Camera>(undefined)

export const mouse = writable<Mouse>({
	raycaster: new THREE.Raycaster(),
	moved: false
})
