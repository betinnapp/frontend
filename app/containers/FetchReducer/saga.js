import { takeLatest, call, put } from 'redux-saga/effects'

import request from 'utils/request'

import * as actions from './actions'
import { FETCH } from './constants'

function* fetch(action) {
  try {
    const { url } = action
    const response = yield call(request, url, { method: 'GET' })

    yield put(actions.fetchSuccess(response))
  } catch (e) {
    yield put(actions.fetchFailure(e))
  }
}

export default function* fetchReducerSaga() {
  yield takeLatest(FETCH, fetch)
}
