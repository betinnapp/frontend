import { all, call, put, takeLatest } from 'redux-saga/effects'
import get from 'lodash/get'

import { USER_DETAILS_API_URL, COINS_API_URL } from 'containers/App/urls'

import request from 'utils/request'
import { deleteToken } from 'utils/auth'

import * as actions from './actions'
import { FETCH_USER_INFORMATION, FETCH_USER_COINS } from './constants'

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

export function* fetchUserCoins() {
  const response = yield call(request, COINS_API_URL, { method: 'GET' })
  const coins = get(response, 'coin', null)
  yield put(actions.fetchUserCoinsSuccess(coins))
}

export default function* commonSaga() {
  yield all([
    takeLatest(FETCH_USER_INFORMATION, fetchUserInformation),
    takeLatest(FETCH_USER_COINS, fetchUserCoins),
  ])
}
