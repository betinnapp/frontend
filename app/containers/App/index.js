/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from 'containers/HomePage/Loadable'
import LoginPage from 'containers/LoginPage'
import ModulesListPage from 'containers/ModulesListPage'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import Notifications from 'containers/Notifications'
import RegisterPage from 'containers/RegisterPage'
import SubmoduleContent from 'containers/SubmoduleContent'
import SubmodulesList from 'containers/SubmodulesList'
import WelcomePage from 'containers/WelcomePage'

import { useInjectSaga } from 'utils/injectSaga'
import { isLoggedIn } from 'utils/auth'
import Fonts from 'components/Fonts'
import GlobalStyle from '../../global-styles'

import * as urls from './urls'
import { fetchUserInformation } from './actions'
import saga from './saga'

const AppWrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
`

export function App(props) {
  useInjectSaga({ key: 'common', saga })

  useEffect(() => {
    if (isLoggedIn()) {
      props.fetchUserInformation()
    }
  }, [])

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
        <Route
          exact
          path={urls.MODULE_DETAILS_PATH}
          component={SubmodulesList}
        />
        <Route
          exact
          path={urls.SUBMODULE_DETAILS_PATH}
          component={SubmoduleContent}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  )
}

App.propTypes = {
  fetchUserInformation: PropTypes.func,
}

const mapStateToProps = () => ({})

function mapDispatchToProps(dispatch) {
  return {
    fetchUserInformation: () => {
      dispatch(fetchUserInformation())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
