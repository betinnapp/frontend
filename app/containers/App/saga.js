import { call, put, takeLatest } from 'redux-saga/effects'

import { USER_DETAILS_API_URL } from 'containers/App/urls'

import request from 'utils/request'
import { deleteToken } from 'utils/auth'

import * as actions from './actions'
import { FETCH_USER_INFORMATION } from './constants'

export function* fetchUserInformation() {
  try {
    const response = yield call(request, USER_DETAILS_API_URL, {
      method: 'GET',
    })

    yield put(actions.saveUserInformation(response))
  } catch (e) {
    deleteToken()
  }
}

export default function* commonSaga() {
  yield takeLatest(FETCH_USER_INFORMATION, fetchUserInformation)
}
