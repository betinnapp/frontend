import { takeLatest, call, put } from 'redux-saga/effects'

import request from 'utils/request'

import { FETCH_API } from './constants'
import { fetchApiSuccess } from './actions'

function* fetchApi(action) {
  try {
    const response = yield call(request, action.url, {
      method: action.method,
      ...action.options,
    })

    console.log(response)
    yield put(fetchApiSuccess(action.stateKey, response))
  } catch (e) {
    console.log('Error ', e)
  }
}

// Individual exports for testing
export default function* thanosT7Saga() {
  yield takeLatest(FETCH_API, fetchApi)
}
