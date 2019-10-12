import { all, call, put, takeLatest } from 'redux-saga/effects'
import { success, error } from 'react-notification-system-redux'

import history from 'utils/history'
import request from 'utils/request'
import {
  GOAL_API_PATH,
  GOAL_INVESTMENT_TYPES_API_URL,
  GOALS_LIST_PATH,
  GOAL_DEPOSIT_API_PATH,
  GOAL_DETAILS_API_PATH,
} from 'containers/App/urls'
import {
  FETCH_INVESTMENT_TYPES,
  SAVE_GOAL,
  FETCH_GOAL,
  UPDATE_GOAL,
} from './constants'
import * as actions from './actions'
import messages from './messages'

function* fetchInvestmentTypes() {
  try {
    const response = yield call(request, GOAL_INVESTMENT_TYPES_API_URL, {
      method: 'GET',
    })

    yield put(actions.fetchInvestmentTypesSuccess(response))
  } catch (e) {
    yield put(actions.fetchInvestmentTypesFailure(e))
  }
}

function* saveGoal(action) {
  const { values } = action
  try {
    const normalizedValues = {
      ...values,
      investmentType: {
        id: values.investmentType,
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

function* fetchGoal(action) {
  try {
    const url = GOAL_DETAILS_API_PATH.replace(':goalId', action.id)

    const response = yield call(request, url, { method: 'GET' })

    yield put(actions.fetchGoalSuccess(response))
  } catch (e) {
    yield put(actions.fetchGoalFailure(e))
    yield put(error({ message: messages.anErrorOccurredWhileLoadingYourGoalDetails, autoDismiss: 8000 }))
  }
}

function* updateGoal(action) {
  try {
    const url = GOAL_DEPOSIT_API_PATH.replace(':goalId', action.id)

    yield call(request, url, {
      method: 'PUT',
      data: {
        currentDeposit: action.currentDeposit,
      },
    })

    yield put(success({ message: messages.goalUpdatedSuccessfully, autoDismiss: 8000 }))
    history.push(GOALS_LIST_PATH)
  } catch (e) {
    yield put(error({ message: messages.anErrorOccurredWhileUpdatingYourGoalDetails, autoDismiss: 8000 }))
  }
}

// Individual exports for testing
export default function* goalDetailsPageSaga() {
  yield all([
    takeLatest(FETCH_INVESTMENT_TYPES, fetchInvestmentTypes),
    takeLatest(SAVE_GOAL, saveGoal),
    takeLatest(FETCH_GOAL, fetchGoal),
    takeLatest(UPDATE_GOAL, updateGoal),
  ])
}
