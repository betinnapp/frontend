import { call, put, takeLatest } from 'redux-saga/effects'
import history from 'utils/history'

import { LOGIN_URL } from 'containers/App/urls'
import request from 'utils/request'
import { addNotification } from 'containers/Notifications/actions'
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
    yield put(addNotification('warning', messages.invalidLogin))
    yield put(actions.loginFailure(e))
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN, makeLogin)
}