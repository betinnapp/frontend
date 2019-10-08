/**
 *
 * GoalsListPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { HOME_PATH, NEW_GOAL_PATH } from 'containers/App/urls'
import Button from 'components/Button'
import ContentWrapper from 'components/ContentWrapper'
import Header from 'components/Header'
import Loader from 'components/Loader'

import reducer from './reducer'
import saga from './saga'
import { fetchGoalsList } from './actions'
import { selectGoalsList, selectGoalsListIsLoading } from './selectors'
import messages from './messages'

const Wrapper = styled(ContentWrapper)`
  padding-bottom: 16px;
  .footer {
    text-align: center;
  }
`

export function GoalsListPage(props) {
  useInjectReducer({ key: 'goalsListPage', reducer })
  useInjectSaga({ key: 'goalsListPage', saga })

  useEffect(() => {
    props.fetchGoalsList()
  }, [])

  return (
    <Wrapper
      fullHeight
      grid
      gridTemplateRows={['auto', '1fr', 'auto']}
      noLateralMargins
    >
      <Header backTo={HOME_PATH} />
      <Loader isLoading={props.isLoading}>
        <div></div>
      </Loader>
      <div className="footer">
        <Button id="makeSimulation" small link={NEW_GOAL_PATH}>
          <FormattedMessage {...messages.makeSimulation} />
        </Button>
      </div>
    </Wrapper>
  )
}

GoalsListPage.propTypes = {
  fetchGoalsList: PropTypes.func.isRequired,
  goalsList: PropTypes.array,
  isLoading: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
  goalsList: selectGoalsList,
  isLoading: selectGoalsListIsLoading,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchGoalsList: () => {
      dispatch(fetchGoalsList())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(GoalsListPage)
