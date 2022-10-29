import api from './skills.json'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = () => {
	return {
		skills: api
	}
}
