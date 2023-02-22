import type { Mesh } from '@threlte/core'
import { onDestroy } from 'svelte'
import type { Object3D } from 'three'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

export const getJoke = async () => {
	const response = await fetch(
		'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist,sexist,explicit'
	)

	if (response.status === 200) {
		const jokeJson = await response.json()

		if (jokeJson.type === 'single') {
			return `<q>${jokeJson.joke}</q>`
		}

		const joke = `<q>${jokeJson.setup}</q><q>${jokeJson.delivery}</q>`
		return joke
	}
	return ''
}

export function clickOnKey(element: HTMLElement, keys = ['Enter']) {
	let inView = false

	const observer = new window.IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				inView = true
			} else {
				inView = false
			}
		},
		{
			root: null,
			threshold: 0
		}
	)

	function handleKeyDown(event: KeyboardEvent) {
		if (keys.includes(event.key)) {
			event.preventDefault()
			if (!inView) {
				element.scrollIntoView({
					behavior: 'smooth'
				})
			}
			element.focus()
		}
	}

	function handleKeyUp(event: KeyboardEvent) {
		if (keys.includes(event.key)) {
			event.preventDefault()
			element.click()
		}
	}

	observer.observe(element)
	document.addEventListener('keydown', handleKeyDown)
	document.addEventListener('keyup', handleKeyUp)

	return {
		destroy() {
			observer.disconnect()
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}
}

export function onSwipe(element: HTMLElement) {
	let touchstartX = 0
	let touchendX = 0

	function checkDirection() {
		if (touchendX < touchstartX) {
			element.dispatchEvent(new CustomEvent('swipeleft'))
		}
		if (touchendX > touchstartX) {
			element.dispatchEvent(new CustomEvent('swiperight'))
		}
	}

	function touchstartHandler(e: TouchEvent) {
		if (e.target !== element) return
		touchstartX = e.changedTouches[0].screenX
	}

	function touchendHandler(e: TouchEvent) {
		if (e.target !== element) return
		touchendX = e.changedTouches[0].screenX
		checkDirection()
	}

	element.addEventListener('touchstart', touchstartHandler)
	element.addEventListener('touchend', touchendHandler)

	return {
		destroy() {
			element.removeEventListener('touchstart', touchstartHandler)
			element.removeEventListener('touchend', touchendHandler)
		}
	}
}

export function randomNumberBetween(min = 0, max = 1) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export function onInterval(callback: () => void, milliseconds: number) {
	const interval = setInterval(callback, milliseconds)

	onDestroy(() => {
		clearInterval(interval)
	})
}

export function inView(node: HTMLElement, params = { threshold: 0 }) {
	let observer: IntersectionObserver

	const handleIntersect: IntersectionObserverCallback = (e) => {
		const v = e[0].isIntersecting ? 'enter' : 'exit'
		node.dispatchEvent(new CustomEvent(v))
	}

	const setObserver = ({ root, threshold }: IntersectionObserverInit) => {
		const options = { root, threshold }
		if (observer) observer.disconnect()
		observer = new IntersectionObserver(handleIntersect, options)
		observer.observe(node)
	}

	setObserver(params)

	return {
		update(params: IntersectionObserverInit) {
			setObserver(params)
		},

		destroy() {
			if (observer) observer.disconnect()
		}
	}
}

export function onCollision(node: HTMLElement) {
	let collision = false

	const collide = (n1: HTMLElement, n2: HTMLElement) => {
		const rect1 = n1.getBoundingClientRect()
		const rect2 = n2.getBoundingClientRect()

		if (
			rect1.x < rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x &&
			rect1.y < rect2.y + rect2.height &&
			rect1.y + rect1.height > rect2.y
		) {
			if (collision === false) {
				collision = true
				node.dispatchEvent(new CustomEvent('collision'))
			}
		} else {
			collision = false
		}

		requestAnimationFrame(collide.bind(null, n1, n2))
	}

	return {
		update(params: { collider: HTMLElement }) {
			collide(node, params.collider)
		}
	}
}

export const applyMaterial = (scene: GLTF['scene'], material: THREE.MeshStandardMaterial) => {
	scene.traverse((child: Mesh | Object3D) => {
		if ('isMesh' in child && child.isMesh) {
			child.material = material
		}
	})
}
