import { LOGIN_URL } from 'containers/App/urls'
import { warning } from 'react-notification-system-redux'
import { call, put, takeLatest } from 'redux-saga/effects'
import history from 'utils/history'
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

    localStorage.setItem('token', response.token)

    yield put(actions.loginSuccess(response))
    yield call(history.push, '/home')
  } catch (e) {
    yield put(warning({ message: messages.invalidLogin, autoDismiss: 50 }))
    yield put(actions.loginFailure(e))
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN, makeLogin)
}
