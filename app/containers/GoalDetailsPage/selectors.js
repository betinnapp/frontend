import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGoalDetailsPageDomain = state => state.goalDetailsPage || initialState

const selectInvestmentTypesState = createSelector(
  selectGoalDetailsPageDomain,
  substate => substate.investmentTypes
)

const selectInvestmentTypes = createSelector(
  selectInvestmentTypesState,
  substate => substate.resource
)

const selectInvestmentTypesIsLoading = createSelector(
  selectInvestmentTypesState,
  substate => substate.isLoading
)

const selectInvestmentTypesOptions = createSelector(
  selectInvestmentTypes,
  substate => substate.map(option => ({
    value: option.id,
    label: `${option.name} (${option.interestRate}% a.a)`,
  }))
)

const selectGoalState = createSelector(
  selectGoalDetailsPageDomain,
  substate => substate.goal
)

const selectGoal = createSelector(
  selectGoalState,
  substate => substate.resource,
)

const selectGoalIsLoading = createSelector(
  selectGoalState,
  substate => substate.isLoading,
)


export {
  selectInvestmentTypes,
  selectInvestmentTypesIsLoading,
  selectInvestmentTypesOptions,
  selectGoal,
  selectGoalIsLoading,
}
