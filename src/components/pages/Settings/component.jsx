import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { useIntl } from 'react-intl'

import { clearHistoryValues } from '@/actions'
import StandardLayout from '@/components/layouts/Standard'
import SetLocale from '@/components/blocks/global/SetLocale'
import SetTheme from '@/components/blocks/global/SetTheme'

import { Title, SettingsBlock, ClearHistory, ButtonsContainer } from './styles'

const SettingsPage = () => {
 const dispatch = useDispatch()
 const intl = useIntl()

 const handleClearHistory = () => {
  try {
    dispatch(clearHistoryValues())
    alert(intl.formatMessage({ id: 'cleared' }))
  } catch (e) {
    alert(intl.formatMessage({ id: 'error' }), e)
  }
 }

 return (
  <StandardLayout>
    <SettingsBlock>
      <Title>
        <FormattedMessage id="settings" />
      </Title>
      <ButtonsContainer>
        <SetLocale/>
        <SetTheme/>
      </ButtonsContainer>
      <ClearHistory onClick={handleClearHistory}>
        <FormattedMessage id="clear_all_history" />
      </ClearHistory>
    </SettingsBlock>
  </StandardLayout>
 )
}

export default SettingsPage
