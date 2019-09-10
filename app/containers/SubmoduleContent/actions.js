/*
 *
 * SubmoduleContent actions
 *
 */

import { FETCH_SUBMODULE_CONTENT } from './constants'

export function fetchSubmoduleContent(moduleId, submoduleId) {
  return {
    type: FETCH_SUBMODULE_CONTENT,
    moduleId,
    submoduleId,
  }
}
