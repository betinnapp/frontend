/*
 *
 * ThanosT7 actions
 *
 */

import { FETCH_API, FETCH_API_SUCCESS } from './constants'

export function fetchApi(url, stateKey, options, method = 'GET') {
  return {
    type: FETCH_API,
    url,
    stateKey,
    options,
    method,
  }
}

export function fetchApiSuccess(stateKey, response) {
  return {
    type: FETCH_API_SUCCESS,
    stateKey,
    response,
  }
}
