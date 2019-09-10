import { call, takeLatest } from 'redux-saga/effects'
import request from 'utils/request'
import { SUBMODULE_API_URL } from 'containers/App/urls'

import { FETCH_SUBMODULE_CONTENT } from './constants'

function* fetchSubmoduleContent(action) {
  // export const SUBMODULE_API_URL = `${BASE_API_PATH}/module/:moduleId/submodule/:submoduleId`
  const url = SUBMODULE_API_URL.replace(':moduleId', action.moduleId).replace(
    ':submoduleId',
    action.submoduleId,
  )

  yield call(request, url, {
    method: 'GET',
  })
}

// Individual exports for testing
export default function* submoduleContentSaga() {
  yield takeLatest(FETCH_SUBMODULE_CONTENT, fetchSubmoduleContent)
}
