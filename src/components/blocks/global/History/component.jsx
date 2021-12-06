import React from 'react'
import { FormattedMessage } from 'react-intl'

import { History, HistoryItem, HistoryTitle } from './styles'

export default ({ values }) => (
  <History>
    <HistoryTitle>
      <FormattedMessage id="history" />
    </HistoryTitle>
    {values.map((elem, index) => <HistoryItem key={`history__${index}`}>{elem}</HistoryItem>)}
  </History>
)
