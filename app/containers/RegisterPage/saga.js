import { takeLatest, call, put, select } from 'redux-saga/effects'

import request from 'utils/request'
import history from 'utils/history'
import { setToken } from 'utils/auth'
import { REGISTER_API_URL } from 'containers/App/urls'

import { saveUserInformation } from 'containers/App/actions'
import { SUBMIT_REGISTER } from './constants'
import { makeSelectAnswers, makeSelectScore } from './selectors'
import * as actions from './actions'

function* submitRegister(action) {
  const answers = yield select(makeSelectAnswers())
  const score = yield select(makeSelectScore())

  try {
    const response = yield call(request, REGISTER_API_URL, {
      method: 'POST',
      data: {
        ...answers,
        initialScore: score,
        password: action.password,
      },
    })

    const { token, ...user } = response

    setToken(token)

    yield put(actions.submitRegisterSuccess())
    yield put(saveUserInformation(user))

    yield call(history.replace, '/home')
  } catch (e) {
    yield put(actions.submitRegisterFailure(e))
  }
}

// Individual exports for testing
export default function* registerPageSaga() {
  yield takeLatest(SUBMIT_REGISTER, submitRegister)
}
