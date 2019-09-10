/*
 *
 * SubmoduleContent actions
 *
 */

import {
  FETCH_SUBMODULE_CONTENT,
  FETCH_SUBMODULE_CONTENT_SUCCESS,
  FETCH_SUBMODULE_CONTENT_FAILURE,
} from './constants'

export function fetchSubmoduleContent(moduleId, submoduleId) {
  return {
    type: FETCH_SUBMODULE_CONTENT,
    moduleId,
    submoduleId,
  }
}

export function fetchSubmoduleContentSuccess(response) {
  return {
    type: FETCH_SUBMODULE_CONTENT_SUCCESS,
    response,
  }
}

export function fetchSubmoduleContentFailure(error) {
  return {
    type: FETCH_SUBMODULE_CONTENT_FAILURE,
    error,
  }
}
