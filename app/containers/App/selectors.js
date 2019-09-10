import { createSelector } from 'reselect'

const selectRouter = state => state.router

const makeSelectLocation = () =>
  createSelector(
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

export { makeSelectLocation, selectUserInformation, selectUserFirstName }
