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

const makeSelectSubmodulesList = () =>
  createSelector(
    selectSubmodulesListDomain,
    substate => substate,
  )

export default makeSelectSubmodulesList
export { selectSubmodulesListDomain }
