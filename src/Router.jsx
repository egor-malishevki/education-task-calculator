import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loader from '@/components/blocks/global/Loader'
import SecuredRoute from '@/components/wrappers/SecuredRoute'
import {
  successStrategyExample,
  failureStrategyExample,
} from '@/routerPermissions'

import { CALCULATOR_PAGE_PATH, SETTINGS_PAGE_PATH } from '@/constants'

const CalculatorPage = React.lazy(() => import('@/components/pages/Calculator'))
const NotFoundPage = React.lazy(() => import('@/components/pages/NotFound'))
const SettingsPage = React.lazy(() => import('@/components/pages/Settings'))

export default () => (
  <Router>
    <React.Suspense fallback={<Loader />}>
      <Switch>
        <Route
          exact
          path={CALCULATOR_PAGE_PATH}
          component={CalculatorPage} />

        <Route
          exact
          path={SETTINGS_PAGE_PATH}
          component={SettingsPage} />

        <SecuredRoute
          path="/success"
          component={CalculatorPage}
          strategy={successStrategyExample} />

        <SecuredRoute
          path="/failure"
          component={CalculatorPage}
          strategy={failureStrategyExample} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </React.Suspense>
  </Router>
)
