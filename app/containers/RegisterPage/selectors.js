import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the registerPage state domain
 */

const selectRegisterPageDomain = state => state.registerPage || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by RegisterPage
 */

const makeSelectQuestions = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.questions,
  )

export default makeSelectQuestions
export { selectRegisterPageDomain }
