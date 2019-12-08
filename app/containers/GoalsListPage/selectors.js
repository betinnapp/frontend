import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGoalsListPageDomain = state => state.goalsListPage || initialState

const selectGoalsListState = createSelector(
  selectGoalsListPageDomain,
  substate => substate.goalsList
)

const selectGoalsList = createSelector(
  selectGoalsListState,
  substate => substate.resource
)

const selectGoalsListIsLoading = createSelector(
  selectGoalsListState,
  substate => substate.isLoading
)

const selectGoalsListLoaded = createSelector(
  selectGoalsListState,
  substate => substate.loaded,
)

export {
  selectGoalsList,
  selectGoalsListIsLoading,
  selectGoalsListLoaded,
}
