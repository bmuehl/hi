import api from '../skills/skills.json'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	return {
		skills: api
	}
}
