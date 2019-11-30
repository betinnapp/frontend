/*
 *
 * Common app actions
 *
 */

import {
  FETCH_USER_INFORMATION,
  SAVE_USER_INFORMATION,
  SET_SELECTED_ID,
  DELETE_SELECTED_ID,
} from './constants'

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

export function setSelectedId(key, value) {
  return {
    type: SET_SELECTED_ID,
    key,
    value,
  }
}

export function deleteSelectedId(key) {
  return {
    type: DELETE_SELECTED_ID,
    key,
  }
}
