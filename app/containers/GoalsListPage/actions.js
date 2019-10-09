/*
 *
 * GoalsListPage actions
 *
 */

import {
  FETCH_GOALS_LIST,
  FETCH_GOALS_LIST_SUCCESS,
  FETCH_GOALS_LIST_FAILURE,
} from './constants'

export function fetchGoalsList() {
  return {
    type: FETCH_GOALS_LIST,
  }
}

export function fetchGoalsListSuccess(response) {
  return {
    type: FETCH_GOALS_LIST_SUCCESS,
    response,
  }
}

export function fetchGoalsListFailure(error) {
  return {
    type: FETCH_GOALS_LIST_FAILURE,
    error,
  }
}
