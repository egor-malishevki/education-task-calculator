
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router-dom'

import { CALCULATOR_PAGE_PATH, SETTINGS_PAGE_PATH } from '@/constants'

import { Header, LinksBlock } from './styles'

export default () => (
  <Header>
    <FormattedMessage id="header" />
    <LinksBlock>
      <NavLink exact activeClassName="is-active" to={CALCULATOR_PAGE_PATH}>
        <FormattedMessage id="header_home_link" />
      </NavLink>
      <NavLink exact activeClassName="is-active" to={SETTINGS_PAGE_PATH}>
        <FormattedMessage id="header_settings_link" />
      </NavLink>
    </LinksBlock>
  </Header>
)
