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
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/home" component={WelcomePage} />
        <Route path="/modules" component={ModulesListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  )
}
