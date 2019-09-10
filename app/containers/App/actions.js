/*
 *
 * Common app actions
 *
 */

import { SAVE_USER_INFORMATION } from './constants'

export function saveUserInformation(user) {
  return {
    type: SAVE_USER_INFORMATION,
    user,
  }
}
