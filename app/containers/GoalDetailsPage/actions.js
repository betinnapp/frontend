/*
 *
 * GoalDetailsPage actions
 *
 */

import {
  FETCH_INVESTIMENT_TYPES,
  FETCH_INVESTIMENT_TYPES_SUCCESS,
  FETCH_INVESTIMENT_TYPES_FAILURE,
} from './constants'

export function fetchInvestimentTypes() {
  return {
    type: FETCH_INVESTIMENT_TYPES,
  }
}

export function fetchInvestimentTypesSuccess(response) {
  return {
    type: FETCH_INVESTIMENT_TYPES_SUCCESS,
    response,
  }
}

export function fetchInvestimentTypesFailure(error) {
  return {
    type: FETCH_INVESTIMENT_TYPES_FAILURE,
    error,
  }
}
