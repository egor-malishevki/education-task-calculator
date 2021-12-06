import { ADD_VALUE, SET_VALUE, REMOVE_VALUE, ADD_HISTORY_VALUE, CLEAR_HISTORY } from '@/constants'

export const removeCalculateValue = () => ({
  type: REMOVE_VALUE,
})

export const clearHistoryValues = () => ({
  type: CLEAR_HISTORY,
})

export const addCalculateValue = payload => ({
  payload,
  type: ADD_VALUE,
})

export const setCalculateValue = payload => ({
  payload,
  type: SET_VALUE,
})

export const addHistoryValue = payload => ({
  payload,
  type: ADD_HISTORY_VALUE,
})
