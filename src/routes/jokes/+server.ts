import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
	const response = await fetch(
		'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist,sexist,explicit'
	)

	if (response.status === 200) {
		const jokeJson = await response.json()

		if (jokeJson.type === 'single') {
			return new Response(`<q>${jokeJson.joke}</q>`)
		}

		const joke = `<q>${jokeJson.setup}</q><q>${jokeJson.delivery}</q>`
		return new Response(joke)
	}
	return new Response('')
}
