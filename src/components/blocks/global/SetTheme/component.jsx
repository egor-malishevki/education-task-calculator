import React from 'react'
import pt from 'prop-types'
import { useIntl } from 'react-intl'

import Select from '@/components/controls/Select'
import { DARK, LIGHT } from '@/constants'

const SetTheme = ({ theme, onSetTheme }) => {
  const intl = useIntl()

  const onChange = ({ target: { value } }) => {
    onSetTheme(value)
  }

  return (
    <Select onChange={onChange} value={theme}>
      <option key={LIGHT} value={LIGHT}>{intl.formatMessage({ id: 'light' })}</option>
      <option key={DARK} value={DARK}>{intl.formatMessage({ id: 'dark' })}</option>
    </Select>
  )
}

SetTheme.propTypes = {
  theme: pt.string.isRequired,
  onSetTheme: pt.func.isRequired,
}

export default SetTheme
