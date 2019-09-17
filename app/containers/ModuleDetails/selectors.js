import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectModuleDetailsDomain = state => state.moduleDetails || initialState

const makeSelectModuleDetails = createSelector(
  selectModuleDetailsDomain,
  substate => substate.resource,
)

const makeSelectModuleDetailsIsLoading = createSelector(
  selectModuleDetailsDomain,
  substate => substate.isLoading,
)

export { makeSelectModuleDetails, makeSelectModuleDetailsIsLoading }
