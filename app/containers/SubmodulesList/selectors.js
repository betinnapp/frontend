import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the submodulesList state domain
 */

const selectSubmodulesListDomain = state => state.submodulesList || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by SubmodulesList
 */

const makeSelectModuleDetails = createSelector(
  selectSubmodulesListDomain,
  substate => substate.resource,
)

const makeSelectModuleDetailsIsLoading = createSelector(
  selectSubmodulesListDomain,
  substate => substate.isLoading,
)

export { makeSelectModuleDetails, makeSelectModuleDetailsIsLoading }
