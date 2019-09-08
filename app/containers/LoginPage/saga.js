import { call, put, takeLatest } from 'redux-saga/effects'
import history from 'utils/history'

import { saveUserInformation } from 'containers/App/actions'
import { LOGIN_URL } from 'containers/App/urls'
import { warning } from 'react-notification-system-redux'

import request from 'utils/request'

import * as actions from './actions'
import { LOGIN } from './constants'
import messages from './messages'

export function* makeLogin(action) {
  try {
    const { username, password } = action.values

    const response = yield call(request, LOGIN_URL, {
      method: 'POST',
      auth: {
        username,
        password,
      },
    })

    const { token, ...user } = response

    localStorage.setItem('token', token)

    yield put(actions.loginSuccess())
    yield put(saveUserInformation(user))

    yield call(history.push, '/home')
  } catch (e) {
    yield put(warning({ message: messages.invalidLogin, autoDismiss: 5000 }))
    yield put(actions.loginFailure(e))
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN, makeLogin)
}
