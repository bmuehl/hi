import * as THREE from 'three'

/** @type {import('../types/common').Position} */
export const position = [0, 0, 0]

/** @type {import('../types/common').Rotation} */
export const rotation = [0, 0, 0]

/** @type {import('../types/common').Scale} */
export const scale = [1, 1, 1]

/** @type {import('three').BufferGeometry} */
export const geometry = new THREE.BufferGeometry()

/** @type {import('three').Material} */
export const material = new THREE.MeshNormalMaterial()
