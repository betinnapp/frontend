import { call, put, takeLatest } from 'redux-saga/effects'

import { LOGIN_URL } from 'containers/App/urls'
import request from 'utils/request'
import * as actions from './actions'
import { LOGIN } from './constants'

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
  } catch (e) {
    yield put(actions.loginFailure(e))
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest(LOGIN, makeLogin)
}
