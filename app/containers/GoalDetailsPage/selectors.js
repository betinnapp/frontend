import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGoalDetailsPageDomain = state => state.goalDetailsPage || initialState

const selectInvestimentTypesState = createSelector(
  selectGoalDetailsPageDomain,
  substate => substate.investimentTypes
)

const selectInvestimentTypes = createSelector(
  selectInvestimentTypesState,
  substate => substate.resource
)

const selectInvestimentTypesIsLoading = createSelector(
  selectInvestimentTypesState,
  substate => substate.isLoading
)

export {
  selectInvestimentTypes,
  selectInvestimentTypesIsLoading,
}
