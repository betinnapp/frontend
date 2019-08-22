/**
 *
 * LoginPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import Button from 'components/Button'
import InputField from 'components/InputField'
import Link from 'components/Link'
import Text from 'components/Text'
import Slogan from 'components/Slogan'

import makeSelectLoginPage from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

const Wrapper = styled.div`
  display: grid;
  /* grid-template-rows: 1fr 2fr 1fr; */
  align-items: center;
  justify-content: center;
  height: 100%;
`

export function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer })
  useInjectSaga({ key: 'loginPage', saga })

  return (
    <Wrapper>
      <Slogan big />
      <div>
        <Text bold big>
          <FormattedMessage {...messages.welcome} />
        </Text>
        <Text semiBold secondary>
          <FormattedMessage {...messages.weHaveALotToLearn} />
        </Text>
      </div>
      <InputField type="text" id="user" name="user" label={messages.user} />
      <InputField
        type="password"
        id="password"
        name="password"
        label={messages.password}
      />
      <Link id="forgotPassword" to="/forgotPassword" bold small>
        <FormattedMessage {...messages.forgotPassword} />
      </Link>
      <Button id="beginSession" type="submit" onClick={() => {}}>
        <FormattedMessage {...messages.beginSession} />
      </Button>
    </Wrapper>
  )
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(LoginPage)
