import { call, put, takeLatest } from 'redux-saga/effects'

import request from 'utils/request'
import { GOAL_INVESTIMENT_TYPES_API_URL } from 'containers/App/urls'
import * as actions from './actions'
import { FETCH_INVESTIMENT_TYPES } from './constants'

function* fetchInvestimentTypes() {
  try {
    const response = yield call(request, GOAL_INVESTIMENT_TYPES_API_URL, {
      method: 'GET',
    })

    yield put(actions.fetchInvestimentTypesSuccess(response))
  } catch (e) {
    yield put(actions.fetchInvestimentTypesFailure(e))
  }
}

// Individual exports for testing
export default function* goalDetailsPageSaga() {
  yield takeLatest(FETCH_INVESTIMENT_TYPES, fetchInvestimentTypes)
}
