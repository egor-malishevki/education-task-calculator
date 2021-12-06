import { SET_THEME } from '@/constants'

export const setTheme = theme => ({
  payload: theme,
  type: SET_THEME,
})
