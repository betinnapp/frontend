/*
 *
 * LoginPage actions
 *
 */

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'

export function login(values) {
  return {
    type: LOGIN,
    values,
  }
}

export function loginSuccess(response) {
  return {
    type: LOGIN_SUCCESS,
    response,
  }
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  }
}
