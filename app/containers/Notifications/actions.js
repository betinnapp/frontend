/*
 *
 * Notifications actions
 *
 */

import { ADD_NOTIFICATION } from './constants'

export function addNotification(feedback, message) {
  return {
    type: ADD_NOTIFICATION,
    feedback,
    message,
  }
}
