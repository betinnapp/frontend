/*
 *
 * FetchReducer actions
 *
 */

import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './constants'

export function fetch(url, stateKey, reducerName) {
  return {
    type: FETCH,
    url,
    stateKey,
    reducerName,
  }
}

export function fetchSuccess(response) {
  return {
    type: FETCH_SUCCESS,
    response,
  }
}

export function fetchFailure(error) {
  return {
    type: FETCH_FAILURE,
    error,
  }
}
