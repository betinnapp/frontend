import { takeLatest, call, put } from 'redux-saga/effects'
import { success, error } from 'react-notification-system-redux'

import request from 'utils/request'
import { USER_DETAILS_API_URL } from 'containers/App/urls'

import * as actions from './actions'
import { SAVE_USER } from './constants'
import messages from './messages'

function* saveUser(action) {
  try {
    yield call(request, USER_DETAILS_API_URL, {
      method: 'PUT',
      data: action.values,
    })

    yield put(actions.saveUserSuccess())
    yield put(success({ message: messages.changesSuccessfullySaved, autoDismiss: 5000 }))
  } catch (e) {
    yield put(error({ message: messages.anErrorOccurredWhileSavingYourInformation, autoDismiss: 5000 }))
    yield put(actions.saveUserFailure(e))
  }
}

export default function* userFormPageSaga() {
  yield takeLatest(SAVE_USER, saveUser)
}
