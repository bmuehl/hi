import { writable } from 'svelte/store'
import type { Camera } from 'three'
import * as THREE from 'three'

export const camera = writable<Camera>(undefined)

export const raycaster = writable<THREE.Raycaster>(new THREE.Raycaster())
