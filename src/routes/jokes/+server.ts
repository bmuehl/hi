import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
	return new Response(await getJoke())
}

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
