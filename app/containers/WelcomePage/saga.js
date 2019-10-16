import { all, call, put, takeLatest } from 'redux-saga/effects'

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

function* fetchCoins() {
  try {
    const response = yield call(request, 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas', {
      method: 'GET',
      params: {
        format: 'json',
      },
    })
    console.log(response)
  } catch (e) {
    console.log('deu ruim')
  }
}

export default function* commonSaga() {
  yield all([
    takeLatest(FETCH_QUICK_MODULES_LIST, fetchQuickModulesList),
    takeLatest('FETCH_COINS', fetchCoins),
  ])
}
