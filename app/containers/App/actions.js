/*
 *
 * Common app actions
 *
 */

import { FETCH_USER_INFORMATION, SAVE_USER_INFORMATION } from './constants'

export function saveUserInformation(user) {
  return {
    type: SAVE_USER_INFORMATION,
    user,
  }
}

export function fetchUserInformation() {
  return {
    type: FETCH_USER_INFORMATION,
  }
}
