<script lang="ts">
	import { set_root } from '../utils/context'
	import { onDestroy, onMount } from 'svelte'
	import * as THREE from 'three'
	import { moved, raycaster } from '../utils/store'

	/** Scene options https://threejs.org/docs/?q=scene#api/en/scenes/Scene */

	export let background: THREE.Color | THREE.Texture | null = null

	export let environment: THREE.Texture | null = null

	export let fog: THREE.FogBase | null = null

	export let overrideMaterial: THREE.Material | null = null

	/** Renderer options https://threejs.org/docs/?q=render#api/en/renderers/WebGLRenderer */

	export let precision: 'lowp' | 'mediump' | 'highp' = 'highp'

	export let powerPreference: 'default' | 'high-performance' | 'low-power' = 'default'

	export let alpha = false
	export let premultipliedAlpha = true
	export let antialias = false
	export let stencil = true
	export let preserveDrawingBuffer = false
	export let failIfMajorPerformanceCaveat = false
	export let depth = true
	export let logarithmicDepthBuffer = false

	export let autoClear = true
	export let autoClearColor = true
	export let autoClearDepth = true
	export let autoClearStencil = true
	export let checkShaderErrors = true
	export let localClippingEnabled = false
	export let physicallyCorrectLights = false

	export let outputEncoding: number | undefined = undefined

	export let clippingPlanes: THREE.Plane[] = []

	export let shadows:
		| boolean
		| typeof THREE.BasicShadowMap
		| typeof THREE.PCFShadowMap
		| typeof THREE.PCFSoftShadowMap
		| typeof THREE.VSMShadowMap
		| undefined = undefined

	export let toneMapping:
		| typeof THREE.NoToneMapping
		| typeof THREE.LinearToneMapping
		| typeof THREE.ReinhardToneMapping
		| typeof THREE.CineonToneMapping
		| typeof THREE.ACESFilmicToneMapping = THREE.NoToneMapping
	export let toneMappingExposure = 1

	/** additional props */
	export let width: number | undefined = undefined

	export let height: number | undefined = undefined

	export let pixelRatio = typeof devicePixelRatio !== 'undefined' ? devicePixelRatio : 1

	// public methods
	export function info() {
		return root.renderer.info
	}

	let _width: number

	let _height: number

	let container: HTMLElement

	let frame: number | null = null

	let rect: DOMRect

	const run = (fn: () => void) => fn()

	const invalidate = () => {
		if (frame) return

		frame = requestAnimationFrame(() => {
			frame = null
			before_render.forEach(run)
			root.renderer.render(root.scene, root.camera.object)
		})
	}

	const before_render: Array<() => void> = []

	const root = set_root({
		canvas: null,
		scene: null,
		renderer: null,

		camera: {
			object: null,
			callback: () => ({}),
			set: (camera, callback) => {
				root.camera.object = camera
				root.camera.callback = callback

				if (root.controls.callback) {
					root.controls.callback(root.camera.object, root.canvas)
				}

				invalidate()
			}
		},

		controls: {
			object: null,
			callback: null,
			set: (callback) => {
				root.controls.callback = callback

				if (root.camera.object) {
					root.controls.object = callback(root.camera.object, root.canvas)
				}
			}
		},

		before_render(fn) {
			before_render.push(fn)

			onDestroy(() => {
				const i = before_render.indexOf(fn)
				before_render.splice(i, 1)
			})
		},

		invalidate
	})

	onMount(() => {
		root.renderer = new THREE.WebGLRenderer({
			canvas: root.canvas,
			precision,
			powerPreference,
			alpha,
			premultipliedAlpha,
			antialias,
			stencil,
			preserveDrawingBuffer,
			failIfMajorPerformanceCaveat,
			depth,
			logarithmicDepthBuffer
		})

		root.scene = new THREE.Scene()

		resize()

		return () => {
			console.log('disposing of renderer')
			root.renderer.forceContextLoss()
			root.renderer.dispose()
		}
	})

	const resize = () => {
		if (width === undefined) {
			_width = container.clientWidth / pixelRatio
		}

		if (height === undefined) {
			_height = container.clientHeight / pixelRatio
		}

		rect = root.renderer.domElement.getBoundingClientRect()
	}

	$: if (root.scene) {
		root.scene.background = background
		root.scene.environment = environment
		root.scene.fog = fog
		root.scene.overrideMaterial = overrideMaterial
	}

	$: if (root.renderer) {
		root.renderer.autoClear = autoClear
		root.renderer.autoClearColor = autoClearColor
		root.renderer.autoClearDepth = autoClearDepth
		root.renderer.autoClearStencil = autoClearStencil
		root.renderer.debug.checkShaderErrors = checkShaderErrors
		root.renderer.localClippingEnabled = localClippingEnabled
		root.renderer.physicallyCorrectLights = physicallyCorrectLights
		if (outputEncoding != null) root.renderer.outputEncoding = outputEncoding
		root.renderer.clippingPlanes = clippingPlanes
		root.renderer.toneMapping = toneMapping
		root.renderer.toneMappingExposure = toneMappingExposure

		if (shadows) {
			root.renderer.shadowMap.enabled = true
			root.renderer.shadowMap.autoUpdate = true // TODO allow some way to control this?
			root.renderer.shadowMap.type = shadows === true ? THREE.PCFShadowMap : shadows
		} else {
			root.renderer.shadowMap.enabled = false
		}

		invalidate()
	}

	$: if (root.renderer) {
		const w = width !== undefined ? width : _width
		const h = height !== undefined ? height : _height

		root.renderer.setSize(w, h, false)
		root.camera.callback(w, h)
		root.renderer.setPixelRatio(pixelRatio)

		invalidate()
	}

	const mouse = new THREE.Vector2()

	const mouseHandler = (e: MouseEvent) => {
		$moved = true
		mouse.set(
			((e.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1,
			-((e.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1
		)
		$raycaster.setFromCamera(mouse, root.camera.object)
	}
</script>

<svelte:window
	on:resize={resize}
	on:mousemove={mouseHandler}
	on:mousedown={() => ($moved = false)}
/>

<div class="three-container" bind:this={container}>
	<canvas bind:this={root.canvas} />

	{#if root.scene}
		<slot />
	{/if}
</div>

<style>
	.three-container,
	canvas {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
</style>
