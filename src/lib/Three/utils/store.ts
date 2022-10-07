import { writable } from 'svelte/store'
import type { Camera } from 'three'

export const camera = writable<Camera>(undefined)
