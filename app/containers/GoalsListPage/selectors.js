import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the goalsListPage state domain
 */

const selectGoalsListPageDomain = state => state.goalsListPage || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoalsListPage
 */

const makeSelectGoalsListPage = () =>
  createSelector(
    selectGoalsListPageDomain,
    substate => substate
  )

export default makeSelectGoalsListPage
export { selectGoalsListPageDomain }
