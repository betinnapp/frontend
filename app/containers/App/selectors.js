import { createSelector } from 'reselect'

const selectRouter = state => state.router

const makeSelectLocation = () => createSelector(
  selectRouter,
  routerState => routerState.location,
)

const selectCommonDomain = state => state.common

const selectUserInformation = createSelector(
  selectCommonDomain,
  substate => substate.userInformation,
)

const selectUserFirstName = createSelector(
  selectUserInformation,
  userInformation => userInformation.firstName,
)

const selectSelectedId = key => createSelector(
  selectCommonDomain,
  substate => substate.selectedIds[key]
)

export {
  makeSelectLocation,
  selectUserInformation,
  selectUserFirstName,
  selectSelectedId,
}
