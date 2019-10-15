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

import Notifications from 'containers/Notifications'

import { useInjectSaga } from 'utils/injectSaga'
import { isLoggedIn } from 'utils/auth'
import history from 'utils/history'
import Fonts from 'components/Fonts'
import GlobalStyle from '../../global-styles'
import routes, { accessLevels } from '../../routes'

import { HOME_PATH } from './urls'
import { fetchUserInformation } from './actions'
import saga from './saga'

const AppWrapper = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px;
`

export function App(props) {
  useInjectSaga({ key: 'common', saga })
  const loggedIn = isLoggedIn()
  let routesMap = []

  useEffect(() => {
    if (loggedIn) {
      props.fetchUserInformation()
      history.replace(HOME_PATH)
    }
  }, [])

  const renderRoutes = () => {
    routesMap = []
    routes.forEach(route => {
      if (
        (loggedIn && route.accessLevel === accessLevels.AUTHENTICATED) ||
        (!loggedIn && route.accessLevel === accessLevels.NOT_AUTHENTICATED) ||
        (route.accessLevel === accessLevels.PUBLIC)
      ) {
        routesMap.push(
          <Route
            key={route.path || 'not-found'}
            {...route}
          />
        )
      }
    })

    return (
      <Switch>
        {routesMap}
      </Switch>
    )
  }

  return (
    <AppWrapper>
      <Fonts />
      <GlobalStyle />
      <Notifications />

      {renderRoutes()}
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
