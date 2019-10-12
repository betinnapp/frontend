/*
 *
 * GoalDetailsPage actions
 *
 */

import {
  FETCH_INVESTMENT_TYPES,
  FETCH_INVESTMENT_TYPES_SUCCESS,
  FETCH_INVESTMENT_TYPES_FAILURE,
  FETCH_GOAL,
  FETCH_GOAL_SUCCESS,
  FETCH_GOAL_FAILURE,
  SAVE_GOAL,
  UPDATE_GOAL,
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

export function fetchGoal(id) {
  return {
    type: FETCH_GOAL,
    id,
  }
}

export function fetchGoalSuccess(response) {
  return {
    type: FETCH_GOAL_SUCCESS,
    response,
  }
}

export function fetchGoalFailure(error) {
  return {
    type: FETCH_GOAL_FAILURE,
    error,
  }
}

export function updateGoal(id, currentDeposit) {
  return {
    type: UPDATE_GOAL,
    id,
    currentDeposit,
  }
}
