import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the submoduleContent state domain
 */

const selectSubmoduleContentDomain = state =>
  state.submoduleContent || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by SubmoduleContent
 */

const makeSelectSubmoduleContent = () =>
  createSelector(
    selectSubmoduleContentDomain,
    substate => substate,
  )

export default makeSelectSubmoduleContent
export { selectSubmoduleContentDomain }
