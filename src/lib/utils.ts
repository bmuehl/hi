import type { GLTF } from '@threlte/extras';
import { onDestroy } from 'svelte';
import { on } from 'svelte/events';
import type { Mesh, MeshStandardMaterial, Object3D } from 'three';
import { pages, type Page } from './store.svelte';

export function clickOnKey(element: HTMLElement, keys = ['Enter']) {
	let inView = false;

	const observer = new window.IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				inView = true;
			} else {
				inView = false;
			}
		},
		{
			root: null,
			threshold: 0
		}
	);

	function handleKeyDown(event: KeyboardEvent) {
		if (keys.includes(event.key)) {
			event.preventDefault();
			if (inView) {
				element.focus();
			}
		}
	}

	function handleKeyUp(event: KeyboardEvent) {
		if (keys.includes(event.key)) {
			event.preventDefault();
			element.click();
		}
	}

	observer.observe(element);
	document.addEventListener('keydown', handleKeyDown);
	document.addEventListener('keyup', handleKeyUp);

	return {
		destroy() {
			observer.disconnect();
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		}
	};
}

export function onSwipe(element: HTMLElement) {
	let touchstartX = 0;
	let touchendX = 0;

	function checkDirection() {
		if (touchendX < touchstartX) {
			element.dispatchEvent(new CustomEvent('swipeleft'));
		}
		if (touchendX > touchstartX) {
			element.dispatchEvent(new CustomEvent('swiperight'));
		}
	}

	function touchstartHandler(e: TouchEvent) {
		if (e.target !== element) return;
		touchstartX = e.changedTouches[0].screenX;
	}

	function touchendHandler(e: TouchEvent) {
		if (e.target !== element) return;
		touchendX = e.changedTouches[0].screenX;
		checkDirection();
	}

	element.addEventListener('touchstart', touchstartHandler);
	element.addEventListener('touchend', touchendHandler);

	return {
		destroy() {
			element.removeEventListener('touchstart', touchstartHandler);
			element.removeEventListener('touchend', touchendHandler);
		}
	};
}

export function onDoubleTap(element: HTMLElement) {
	let lastTap = 0;
	const maxTime = 200;
	const minTime = 100;

	function handleTap() {
		const now = new Date().getTime();
		const timesince = now - lastTap;
		if (timesince < maxTime && timesince > minTime) {
			element.dispatchEvent(new CustomEvent('dbltap'));
		}
		lastTap = now;
	}

	const off = on(document, 'touchstart', handleTap);

	return {
		destroy() {
			off();
		}
	};
}

export function randomNumberBetween(min = 0, max = 1) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function onInterval(callback: () => void, milliseconds: number) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}

export function inView(node: HTMLElement, params = { threshold: 0 }) {
	let observer: IntersectionObserver;

	const handleIntersect: IntersectionObserverCallback = (e) => {
		const v = e[0].isIntersecting ? 'enter' : 'exit';
		node.dispatchEvent(new CustomEvent(v));
	};

	const setObserver = ({ root, threshold }: IntersectionObserverInit) => {
		const options = { root, threshold };
		if (observer) observer.disconnect();
		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(node);
	};

	setObserver(params);

	return {
		update(params: IntersectionObserverInit) {
			setObserver(params);
		},

		destroy() {
			if (observer) observer.disconnect();
		}
	};
}

export function onCollision(node: HTMLElement, params: { collider: HTMLElement }) {
	let collision = false;

	const collide = (n1: HTMLElement, n2: HTMLElement) => {
		const rect1 = n1.getBoundingClientRect();
		const rect2 = n2.getBoundingClientRect();

		if (
			rect1.x < rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x &&
			rect1.y < rect2.y + rect2.height &&
			rect1.y + rect1.height > rect2.y
		) {
			if (collision === false) {
				collision = true;
				node.dispatchEvent(new CustomEvent('collision'));
			}
		} else {
			collision = false;
		}

		requestAnimationFrame(collide.bind(null, n1, n2));
	};

	collide(node, params.collider);

	return {};
}

export const applyMaterial = (scene: GLTF['scene'], material: MeshStandardMaterial) => {
	scene.traverse((child: Mesh | Object3D) => {
		if ('isMesh' in child && child.isMesh) {
			child.material = material;
		}
	});
};

export const pathToPage = (path: string) => {
	return (path.split('/')[1] || 'home') as Page;
};

export const pageToPath = (page: Page) => {
	return page === 'home' ? '/' : `/${page}`;
};

export const nextPage = (page: Page) => {
	const next = pages[(pages.indexOf(page) + 1) % pages.length];
	return next === 'home' ? '' : next;
};

export const formatDate = (date: Date, showDay = false) =>
	date.toLocaleDateString('en-GB', {
		year: 'numeric',
		month: 'short',
		day: showDay ? 'numeric' : undefined
	});
