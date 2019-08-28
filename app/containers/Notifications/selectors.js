import { createSelector } from 'reselect'

/**
 * Direct selector to the notifications state domain
 */

const selectNotificationsDomain = state => state.notifications || []

/**
 * Other specific selectors
 */

/**
 * Default selector used by Notifications
 */

const makeSelectNotifications = () =>
  createSelector(
    selectNotificationsDomain,
    substate => substate.resource,
  )

export default makeSelectNotifications
export { selectNotificationsDomain }
