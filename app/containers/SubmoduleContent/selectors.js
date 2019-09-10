import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectSubmoduleContentDomain = state =>
  state.submoduleContent || initialState

const selectSubmoduleContent = createSelector(
  selectSubmoduleContentDomain,
  substate => substate.resource,
)

const selectSubmoduleContentIsLoading = createSelector(
  selectSubmoduleContentDomain,
  substate => substate.isLoading,
)

export {
  selectSubmoduleContentDomain,
  selectSubmoduleContent,
  selectSubmoduleContentIsLoading,
}
