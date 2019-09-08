/**
 *
 * WelcomePage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import Button from 'components/Button'

import messages from './messages'

export function WelcomePage() {
  return (
    <div>
      <div>
        <FormattedMessage
          {...messages.welcomeUser}
          values={{ username: 'Test' }}
        />
      </div>
      <div>
        <Button id="seeAvailableModules" link="/modules" small>
          <FormattedMessage {...messages.seeAvailableModules} />
        </Button>
      </div>
    </div>
  )
}

WelcomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(WelcomePage)
