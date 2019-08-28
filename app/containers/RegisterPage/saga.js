import { takeLatest, call, select } from 'redux-saga/effects'

import request from 'utils/request'
import history from 'utils/history'
import { REGISTER_URL } from 'containers/App/urls'

import { SUBMIT_REGISTER } from './constants'
import { makeSelectAnswers } from './selectors'

function* submitRegister(action) {
  console.log('submitRegister', action)
  const answers = yield select(makeSelectAnswers())

  try {
    const response = yield call(request, REGISTER_URL, {
      method: 'POST',
      data: {
        firstName: 'Vitor',
        lastName: 'Marques',
        email: 'vitor@email.com',
        birthDate: '1995-10-10',
        initialScore: 2,
        password: 'Vitor!',
      },
    })

    localStorage.setItem('token', response.token)
    yield call(history.replace, '/home')
  } catch (e) {
    console.log(e)
  }
}

// Individual exports for testing
export default function* registerPageSaga() {
  yield takeLatest(SUBMIT_REGISTER, submitRegister)
}
