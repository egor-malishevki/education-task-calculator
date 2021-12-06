import { combineReducers } from 'redux'

import internalization from './internalization'
import calculator from './calculator'
import theme from './theme'

export default combineReducers({
  internalization,
  calculator,
  theme,
})
