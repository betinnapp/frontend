/*
 *
 * UserFormPage actions
 *
 */

import {
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,
} from './constants'

export function saveUser(values) {
  return {
    type: SAVE_USER,
    values,
  }
}

export function saveUserSuccess() {
  return {
    type: SAVE_USER_SUCCESS,
  }
}

export function saveUserFailure(error) {
  return {
    type: SAVE_USER_FAILURE,
    error,
  }
}
