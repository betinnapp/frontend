import { call, put, takeLatest } from 'redux-saga/effects'
import request from 'utils/request'
import { MODULES_LIST_URL } from 'containers/App/urls'

import * as actions from './actions'
import { FETCH_MODULES_LIST } from './constants'

function* fetchModulesList() {
  try {
    const response = yield call(request, MODULES_LIST_URL, {
      method: 'PUT',
    })
    yield put(actions.fetchModulesListSuccess(response))
  } catch (e) {
    yield put(actions.fetchModulesListFailure(e))
  }
}

export default function* modulesListPageSaga() {
  yield takeLatest(FETCH_MODULES_LIST, fetchModulesList)
}
