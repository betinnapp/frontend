/**
 *
 * GoalDetailsPage
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
import makeSelectGoalDetailsPage from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

export function GoalDetailsPage() {
  useInjectReducer({ key: 'goalDetailsPage', reducer })
  useInjectSaga({ key: 'goalDetailsPage', saga })

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  )
}

GoalDetailsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  goalDetailsPage: makeSelectGoalDetailsPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(GoalDetailsPage)
