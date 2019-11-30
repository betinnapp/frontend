/*
 *
 * WelcomePage actions
 *
 */

import {
  FETCH_QUICK_MODULES_LIST,
  FETCH_QUICK_MODULES_LIST_SUCCESS,
  FETCH_QUICK_MODULES_LIST_FAILURE,
  FETCH_USER_COINS,
  FETCH_USER_COINS_SUCCESS,
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

export function fetchUserCoins() {
  return {
    type: FETCH_USER_COINS,
  }
}

export function fetchUserCoinsSuccess(coins) {
  return {
    type: FETCH_USER_COINS_SUCCESS,
    coins,
  }
}
