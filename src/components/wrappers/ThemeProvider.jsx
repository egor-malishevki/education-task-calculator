import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector } from 'react-redux'

import { LIGHT } from '@/constants/themes'
import GlobalStyle from '@/theme/GlobalStyle'
import { dark, light } from '@/theme'
import { childrenPropType } from '@/prop-types'

const ThemeProviderWrapper = ({ children }) => {
  const theme = useSelector(state => state.theme.theme)
  return (
    <ThemeProvider theme={theme === LIGHT ? light : dark}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}

ThemeProviderWrapper.propTypes = {
  children: childrenPropType,
}

export default ThemeProviderWrapper
