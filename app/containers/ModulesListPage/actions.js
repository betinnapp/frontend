/*
 *
 * ModulesListPage actions
 *
 */

import {
  FETCH_MODULES_LIST,
  FETCH_MODULES_LIST_SUCCESS,
  FETCH_MODULES_LIST_FAILURE,
} from './constants'

export function fetchModulesList() {
  return {
    type: FETCH_MODULES_LIST,
  }
}

export function fetchModulesListSuccess(response) {
  return {
    type: FETCH_MODULES_LIST_SUCCESS,
    response,
  }
}

export function fetchModulesListFailure(error) {
  return {
    type: FETCH_MODULES_LIST_FAILURE,
    error,
  }
}
