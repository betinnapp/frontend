import { call, put, takeLatest } from 'redux-saga/effects'
import { error } from 'react-notification-system-redux'

import request from 'utils/request'
import { SUBMODULE_API_URL } from 'containers/App/urls'

import { FETCH_SUBMODULE_CONTENT } from './constants'
import * as actions from './actions'
import messages from './messages'

function* fetchSubmoduleContent(action) {
  try {
    const url = SUBMODULE_API_URL.replace(':moduleId', action.moduleId).replace(
      ':submoduleId',
      action.submoduleId,
    )

    const response = yield call(request, url, {
      method: 'GET',
    })

    yield put(actions.fetchSubmoduleContentSuccess(response))
  } catch (e) {
    yield put(
      error({ message: messages.unableToLoadContent, autoDismiss: 5000 }),
    )
    yield put(actions.fetchSubmoduleContentFailure(e))
  }
}

// Individual exports for testing
export default function* submoduleContentSaga() {
  yield takeLatest(FETCH_SUBMODULE_CONTENT, fetchSubmoduleContent)
}
