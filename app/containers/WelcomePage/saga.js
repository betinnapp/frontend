import { all, call, put, takeLatest } from 'redux-saga/effects'
import get from 'lodash/get'

import request from 'utils/request'
import { MODULES_LIST_QUICK_ACCESS_API_URL, COINS_API_URL } from 'containers/App/urls'

import * as actions from './actions'
import { FETCH_QUICK_MODULES_LIST, FETCH_USER_COINS } from './constants'

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

export function* fetchUserCoins() {
  const response = yield call(request, COINS_API_URL, { method: 'GET' })
  const coins = get(response, 'coin', null)
  yield put(actions.fetchUserCoinsSuccess(coins))
}

export default function* commonSaga() {
  yield all([
    takeLatest(FETCH_QUICK_MODULES_LIST, fetchQuickModulesList),
    takeLatest(FETCH_USER_COINS, fetchUserCoins),
  ])
}
