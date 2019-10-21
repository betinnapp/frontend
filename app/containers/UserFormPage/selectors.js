import { createSelector } from 'reselect'
import { selectUserInformation } from 'containers/App/selectors'
import { initialState } from './reducer'

const selectUserFormPageDomain = state => state.userFormPage || initialState

const selectUserFormInitialValues = createSelector(
  selectUserInformation,
  substate => ({
    firstName: substate.firstName || '',
    lastName: substate.lastName || '',
    shortName: substate.shortName || '',
    email: substate.email || '',
    birthDate: substate.birthDate || '',
    work: substate.work || false,
  })
)

const selectUserSaveIsLoading = createSelector(
  selectUserFormPageDomain,
  substate => substate.isLoading
)

export {
  selectUserFormInitialValues,
  selectUserSaveIsLoading,
}
