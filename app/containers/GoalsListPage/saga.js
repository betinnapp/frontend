import { takeLatest, call, put } from 'redux-saga/effects'

import request from 'utils/request'
import { GOALS_LIST_API_URL } from 'containers/App/urls'

import { FETCH_GOALS_LIST } from './constants'
import * as actions from './actions'

function* fetchGoalsList() {
  try {
    const response = yield call(request, GOALS_LIST_API_URL, {
      method: 'GET',
    })

    yield put(actions.fetchGoalsListSuccess(response))
  } catch (e) {
    yield put(actions.fetchGoalsListFailure(e))
  }
}

// Individual exports for testing
export default function* goalsListPageSaga() {
  yield takeLatest(FETCH_GOALS_LIST, fetchGoalsList)
}
