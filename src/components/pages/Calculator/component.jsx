import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormattedMessage } from 'react-intl'

import StandardLayout from '@/components/layouts/Standard'
import Display from '@/components/blocks/global/Display'
import Keypad from '@/components/blocks/global/Keypad'
import History from '@/components/blocks/global/History'
import ControlPanel from '@/components/blocks/global/ControlPanel'
import { addCalculateValue, setCalculateValue, removeCalculateValue, addHistoryValue } from '@/actions'

import { CalculatorBlock, HistoryBlock, MainBlock, UndoButton } from './styles'

const CalculatorPage = () => {
 const dispatch = useDispatch()
 const calculatorValue = useSelector(state => state.calculator.value)
 const historyValues = useSelector(state => state.calculator.history)

 const labels = [
  "C","1","2", "3", "*",
  "-","4","5", "6", "/",
  "+","7","8", "9", "=",
  ".","(","0", ")", "CE",
 ]

 const calculate = () => {
    try {
      /* eslint-disable no-eval */
      const result = String(eval(calculatorValue))
      if (result !== calculatorValue) {
        dispatch(setCalculateValue(result))
        dispatch(addHistoryValue(calculatorValue))
      }
    } catch (e) {
      dispatch(setCalculateValue('error'))
    }
 }

 const handleClick = e => {
    const value = e.target.getAttribute('data-value')
    switch(value) {
        case 'C':
          dispatch(setCalculateValue('0'))
          break
        case 'CE': 
          dispatch(removeCalculateValue())
          break
        case '=':
          calculate()
          break
        default:
          dispatch(addCalculateValue(value))
    }
 }

 const handleUndoClick = () => {
  if (historyValues.length !== 0) {
    dispatch(setCalculateValue(historyValues.shift()))
  } else {
    dispatch(setCalculateValue('0'))
  }
 }

 return (
  <StandardLayout>
    <MainBlock>
      <CalculatorBlock>
        <Display value={calculatorValue} />
        <Keypad labels={labels} handleClick={handleClick} />
        <ControlPanel>
          <UndoButton onClick={handleUndoClick}>
            <FormattedMessage id="undo" />
          </UndoButton>
        </ControlPanel>
      </CalculatorBlock>
      <HistoryBlock>
        <History values={historyValues} />
      </HistoryBlock>
    </MainBlock>
  </StandardLayout>
 )
}

export default CalculatorPage
