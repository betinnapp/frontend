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

import HomePage from 'containers/HomePage/Loadable'
import LoginPage from 'containers/LoginPage'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import RegisterPage from 'containers/RegisterPage'

import GlobalStyle from '../../global-styles'

const AppWrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
`

export default function App() {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  )
}
