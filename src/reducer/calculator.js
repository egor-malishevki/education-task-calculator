import { ADD_VALUE, SET_VALUE, REMOVE_VALUE, ADD_HISTORY_VALUE, CLEAR_HISTORY } from '@/constants'

const initialState = {
  value: '0',
  history: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_VALUE: return {
      ...state,
      value: (state.value === '0') ? action.payload : (state.value + action.payload),
    }
    case SET_VALUE: return {
      ...state,
      value: action.payload,
    }
    case REMOVE_VALUE: return {
      ...state,
      value: (state.value.length !== 1) ? state.value.slice(0, -1) : '0',
    }
    case ADD_HISTORY_VALUE: return {
      ...state,
      history: [action.payload, ...state.history],
    }
    case CLEAR_HISTORY: return {
      ...state,
      history: [],
    }

    default: return state
  }
}
