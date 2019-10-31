import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectThanosT7Domain = state => state.thanosT7 || initialState

const selectResponse = stateKey => createSelector(
  selectThanosT7Domain,
  substate => substate[stateKey]
)

export { selectResponse }
