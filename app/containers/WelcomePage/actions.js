/*
 *
 * WelcomePage actions
 *
 */

import {
  FETCH_QUICK_MODULES_LIST,
  FETCH_QUICK_MODULES_LIST_SUCCESS,
  FETCH_QUICK_MODULES_LIST_FAILURE,
} from './constants'

export function fetchQuickModulesList() {
  return {
    type: FETCH_QUICK_MODULES_LIST,
  }
}

export function fetchQuickModulesListSuccess(response) {
  return {
    type: FETCH_QUICK_MODULES_LIST_SUCCESS,
    response,
  }
}

export function fetchQuickModulesListFailure(error) {
  return {
    type: FETCH_QUICK_MODULES_LIST_FAILURE,
    error,
  }
}
