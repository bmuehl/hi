import type { Skill } from 'src/routes/experience/types'
import { writable } from 'svelte/store'

export const activeSkill = writable<Skill>(undefined)

export const focusSkill = writable<number | false>(0)
