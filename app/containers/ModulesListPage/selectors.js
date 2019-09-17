import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectModulesListPageDomain = state =>
  state.modulesListPage || initialState

const selectModulesListIsLoading = createSelector(
  selectModulesListPageDomain,
  substate => substate.isLoading,
)

const selectModulesList = createSelector(
  selectModulesListPageDomain,
  substate => substate.resource,
)

const selectModulesListError = createSelector(
  selectModulesListPageDomain,
  substate => substate.error,
)

export {
  selectModulesListPageDomain,
  selectModulesList,
  selectModulesListError,
  selectModulesListIsLoading,
}
