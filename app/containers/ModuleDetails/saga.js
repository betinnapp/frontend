import { takeLatest, call, put } from 'redux-saga/effects'

import request from 'utils/request'
import { MODULE_DETAILS_API_URL } from 'containers/App/urls'

import * as actions from './actions'
import { FETCH_MODULE_DETAILS } from './constants'

function* fetchModuleDetails(action) {
  try {
    const url = MODULE_DETAILS_API_URL.replace(':moduleId', action.id)
    const response = yield call(request, url, {
      method: 'GET',
    })
    yield put(actions.fetchModuleDetailsSuccess(response))
  } catch (e) {
    yield put(actions.fetchModuleDetailsFailure(e))
  }
}

// Individual exports for testing
export default function* moduleDetailsSaga() {
  yield takeLatest(FETCH_MODULE_DETAILS, fetchModuleDetails)
}
