import { takeLatest, call, put, select } from 'redux-saga/effects'

import request from 'utils/request'
import history from 'utils/history'
import { REGISTER_URL } from 'containers/App/urls'

import { SUBMIT_REGISTER } from './constants'
import { makeSelectAnswers, makeSelectScore } from './selectors'
import * as actions from './actions'

function* submitRegister() {
  const answers = yield select(makeSelectAnswers())
  const score = yield select(makeSelectScore())

  try {
    const response = yield call(request, REGISTER_URL, {
      method: 'POST',
      data: {
        ...answers,
        initialScore: score,
      },
    })

    localStorage.setItem('token', response.token)
    yield put(actions.submitRegisterSuccess())
    yield call(history.replace, '/home')
  } catch (e) {
    yield put(actions.submitRegisterFailure(e))
  }
}

// Individual exports for testing
export default function* registerPageSaga() {
  yield takeLatest(SUBMIT_REGISTER, submitRegister)
}