import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectWelcomePageDomain = state => state.welcomePage || initialState

const selectModulesListState = createSelector(
  selectWelcomePageDomain,
  substate => substate.modulesList
)

const selectModulesList = createSelector(
  selectModulesListState,
  substate => substate.resource
)

const selectModulesListIsLoading = createSelector(
  selectModulesListState,
  substate => substate.isLoading
)

const selectModulesListError = createSelector(
  selectModulesListState,
  substate => substate.error
)

const selectUserCoins = createSelector(
  selectWelcomePageDomain,
  substate => substate.userCoins
)

export {
  selectModulesList,
  selectModulesListIsLoading,
  selectModulesListError,
  selectUserCoins,
}
