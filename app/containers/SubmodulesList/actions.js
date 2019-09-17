/*
 *
 * SubmodulesList actions
 *
 */

import {
  FETCH_MODULE_DETAILS,
  FETCH_MODULE_DETAILS_SUCCESS,
  FETCH_MODULE_DETAILS_FAILURE,
} from './constants'

export function fetchModuleDetails(id) {
  return {
    type: FETCH_MODULE_DETAILS,
    id,
  }
}

export function fetchModuleDetailsSuccess(response) {
  return {
    type: FETCH_MODULE_DETAILS_SUCCESS,
    response,
  }
}
export function fetchModuleDetailsFailure(error) {
  return {
    type: FETCH_MODULE_DETAILS_FAILURE,
    error,
  }
}
