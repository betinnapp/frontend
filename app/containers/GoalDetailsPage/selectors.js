import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the goalDetailsPage state domain
 */

const selectGoalDetailsPageDomain = state =>
  state.goalDetailsPage || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by GoalDetailsPage
 */

const makeSelectGoalDetailsPage = () =>
  createSelector(
    selectGoalDetailsPageDomain,
    substate => substate
  )

export default makeSelectGoalDetailsPage
export { selectGoalDetailsPageDomain }
