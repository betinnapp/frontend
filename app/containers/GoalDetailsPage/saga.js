import { all, call, put, takeLatest } from 'redux-saga/effects'
import { success, error } from 'react-notification-system-redux'

import history from 'utils/history'
import request from 'utils/request'
import {
  GOAL_API_PATH,
  GOAL_INVESTIMENT_TYPES_API_URL,
  GOALS_LIST_PATH,
} from 'containers/App/urls'
import {
  FETCH_INVESTIMENT_TYPES,
  SAVE_GOAL,
} from './constants'
import * as actions from './actions'
import messages from './messages'

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

function* saveGoal(action) {
  const { values } = action
  try {
    const normalizedValues = {
      ...values,
      investimentType: {
        id: values.investimentType,
      },
      goal: values.depositTotal + (values.monthlyDeposit * values.duration),
    }

    yield call(request, GOAL_API_PATH, {
      method: 'POST',
      data: normalizedValues,
    })

    yield put(success({ message: messages.goalSuccessfullyCreated, autoDismiss: 5000 }))
    history.push(GOALS_LIST_PATH)
  } catch (e) {
    yield put(error({ message: messages.anErrorOccurredWhileCreatingYourGoal, autoDismiss: 5000 }))
  }
}

// Individual exports for testing
export default function* goalDetailsPageSaga() {
  yield all([
    takeLatest(FETCH_INVESTIMENT_TYPES, fetchInvestimentTypes),
    takeLatest(SAVE_GOAL, saveGoal),
  ])
}
