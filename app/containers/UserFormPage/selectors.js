import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the userFormPage state domain
 */

const selectUserFormPageDomain = state => state.userFormPage || initialState

/**
 * Other specific selectors
 */

/**
 * Default selector used by UserFormPage
 */

const makeSelectUserFormPage = () =>
  createSelector(
    selectUserFormPageDomain,
    substate => substate
  )

export default makeSelectUserFormPage
export { selectUserFormPageDomain }
