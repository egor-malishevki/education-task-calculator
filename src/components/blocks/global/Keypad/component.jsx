import React from 'react'

import { Keypad, KeypadButton } from './styles'

export default ({ labels, handleClick }) => {
 return (
  <Keypad>
    {labels.map((item, index) => <KeypadButton key={`item__${index}`} onClick={handleClick} data-value={item}>{item}</KeypadButton>)}
  </Keypad>
 )
}
