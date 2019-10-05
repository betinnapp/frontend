import { call, put, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { MODULES_LIST_QUICK_ACCESS_API_URL } from 'containers/App/urls'

import * as actions from './actions'
import { FETCH_QUICK_MODULES_LIST } from './constants'

export function* fetchQuickModulesList() {
  try {
    const response = yield call(request, MODULES_LIST_QUICK_ACCESS_API_URL, {
      method: 'GET',
    })

    yield put(actions.fetchQuickModulesListSuccess(response))
  } catch (e) {
    yield put(actions.fetchQuickModulesListFailure(e))
  }
}

export default function* commonSaga() {
  yield takeLatest(FETCH_QUICK_MODULES_LIST, fetchQuickModulesList)
}
