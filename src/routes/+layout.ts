import type { LayoutLoad } from './$types'

export const prerender = true

export const load: LayoutLoad = async ({ fetch, url }) => {
	const response = await fetch('/jokes')

	return {
		joke: await response.text(),
		path: url.pathname
	}
}
