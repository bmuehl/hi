import type { PageServerLoad } from './$types'
import api from './skills.json'

export const load: PageServerLoad = () => {
	return {
		skills: api
	}
}
