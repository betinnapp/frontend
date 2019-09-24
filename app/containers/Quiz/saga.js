import { takeLatest, call, put } from 'redux-saga/effects'
import { error } from 'react-notification-system-redux'

import request from 'utils/request'
import { SURVEY_API_URL } from 'containers/App/urls'

import { FETCH_QUIZ } from './constants'
import * as actions from './actions'
import messages from './messages'

function* fetchQuiz(action) {
  try {
    const url = SURVEY_API_URL.replace(':surveyId', action.quizId)

    const response = yield call(request, url, {
      method: 'GET',
    })

    yield put(actions.fetchQuizSuccess(response))
  } catch (e) {
    yield put(
      error({ message: messages.unableToLoadContent, autoDismiss: 5000 }),
    )
    yield put(actions.fetchQuizFailure(e))
  }
}

export default function* quizSaga() {
  yield takeLatest(FETCH_QUIZ, fetchQuiz)
}
