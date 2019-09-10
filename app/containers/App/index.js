/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import { useInjectReducer } from 'utils/injectReducer'
import HomePage from 'containers/HomePage/Loadable'
import LoginPage from 'containers/LoginPage'
import ModulesListPage from 'containers/ModulesListPage'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Notifications from 'containers/Notifications'
import RegisterPage from 'containers/RegisterPage'
import WelcomePage from 'containers/WelcomePage'

import Fonts from 'components/Fonts'
import * as urls from './urls'
import GlobalStyle from '../../global-styles'

import reducer from './reducer'

const AppWrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
`

export default function App() {
  useInjectReducer({ key: 'common', reducer })

  return (
    <AppWrapper>
      <Fonts />
      <GlobalStyle />
      <Notifications />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path={urls.LOGIN_PATH} component={LoginPage} />
        <Route exact path={urls.REGISTER_PATH} component={RegisterPage} />
        <Route exact path={urls.HOME_PATH} component={WelcomePage} />
        <Route exact path={urls.MODULES_PATH} component={ModulesListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  )
}
