/**
 *
 * GoalDetailsPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { GOALS_LIST_PATH } from 'containers/App/urls'
import ContentWrapper from 'components/ContentWrapper'
import Header from 'components/Header'

import reducer from './reducer'
import saga from './saga'
import {
  selectInvestmentTypes,
  selectInvestmentTypesIsLoading,
  selectInvestmentTypesOptions,
  selectGoal,
  selectGoalIsLoading,
} from './selectors'
import {
  fetchInvestmentTypes,
  saveGoal,
  fetchGoal,
  updateGoal,
  deleteGoal,
} from './actions'
import NewGoalForm from './NewGoalForm'
import GoalDetailsForm from './GoalDetailsForm'

export function GoalDetailsPage(props) {
  useInjectReducer({ key: 'goalDetailsPage', reducer })
  useInjectSaga({ key: 'goalDetailsPage', saga })
  const { match: { params: { goalId } } } = props

  useEffect(() => {
    if (goalId) {
      props.fetchGoal(goalId)
    } else {
      props.fetchInvestmentTypes()
    }
  }, [])

  return (
    <ContentWrapper
      fullHeight
      grid
      gridTemplateRows={['auto', '1fr']}
      noLateralMargins
    >
      <Header backTo={GOALS_LIST_PATH} />
      <div>
        {goalId ? (
          <GoalDetailsForm
            goal={props.goal}
            isLoading={props.goalIsLoading}
            updateGoal={props.updateGoal}
            deleteGoal={props.deleteGoal}
          />
        ) : (
          <NewGoalForm
            investmentTypes={props.investmentTypes}
            investmentTypesOptions={props.investmentTypesOptions}
            saveGoal={props.saveGoal}
          />
        )}
      </div>
    </ContentWrapper>
  )
}

GoalDetailsPage.propTypes = {
  fetchInvestmentTypes: PropTypes.func,
  investmentTypes: PropTypes.array,
  investmentTypesOptions: PropTypes.array,
  saveGoal: PropTypes.func,
  fetchGoal: PropTypes.func,
  goal: PropTypes.object,
  goalIsLoading: PropTypes.bool,
  match: PropTypes.object,
  updateGoal: PropTypes.func,
  deleteGoal: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  investmentTypes: selectInvestmentTypes,
  investmentTypesIsLoading: selectInvestmentTypesIsLoading,
  investmentTypesOptions: selectInvestmentTypesOptions,
  goal: selectGoal,
  goalIsLoading: selectGoalIsLoading,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchInvestmentTypes: () => {
      dispatch(fetchInvestmentTypes())
    },
    saveGoal: values => {
      dispatch(saveGoal(values))
    },
    fetchGoal: id => {
      dispatch(fetchGoal(id))
    },
    updateGoal: (id, deposit) => {
      dispatch(updateGoal(id, deposit))
    },
    deleteGoal: id => {
      dispatch(deleteGoal(id))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(GoalDetailsPage)
