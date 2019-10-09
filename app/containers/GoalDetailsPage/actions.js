/*
 *
 * GoalDetailsPage actions
 *
 */

import {
  FETCH_INVESTMENT_TYPES,
  FETCH_INVESTMENT_TYPES_SUCCESS,
  FETCH_INVESTMENT_TYPES_FAILURE,
  SAVE_GOAL,
} from './constants'

export function fetchInvestmentTypes() {
  return {
    type: FETCH_INVESTMENT_TYPES,
  }
}

export function fetchInvestmentTypesSuccess(response) {
  return {
    type: FETCH_INVESTMENT_TYPES_SUCCESS,
    response,
  }
}

export function fetchInvestmentTypesFailure(error) {
  return {
    type: FETCH_INVESTMENT_TYPES_FAILURE,
    error,
  }
}

export function saveGoal(values) {
  return {
    type: SAVE_GOAL,
    values,
  }
}
