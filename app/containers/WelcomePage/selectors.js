import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectWelcomePageDomain = state => state.welcomePage || initialState

const selectModulesListState = createSelector(
  selectWelcomePageDomain,
  substate => substate.modulesList
)

const selectModulesList = createSelector(
  selectModulesListState,
  substate => substate.resource
)

export {
  selectModulesList,
}
