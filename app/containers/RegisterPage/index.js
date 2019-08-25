/**
 *
 * RegisterPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import makeSelectRegisterPage from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

export function RegisterPage() {
  useInjectReducer({ key: 'registerPage', reducer })
  useInjectSaga({ key: 'registerPage', saga })

  return (
    <div>
      <FormattedMessage {...messages.tellAboutYou} />
    </div>
  )
}

RegisterPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
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

export default compose(withConnect)(RegisterPage)
