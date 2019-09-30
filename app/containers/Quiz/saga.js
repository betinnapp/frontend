import {
  takeLatest,
  call,
  put,
  select,
  all,
} from 'redux-saga/effects'
import { error } from 'react-notification-system-redux'

import request from 'utils/request'
import { SURVEY_API_URL, SURVEY_ANSWER_API_URL } from 'containers/App/urls'
import { selectSelectedId } from 'containers/App/selectors'

import { selectAnswers } from './selectors'
import { FETCH_QUIZ, SEND_ANSWERS } from './constants'
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

function* sendQuizAnswer() {
  try {
    const answers = yield select(selectAnswers)
    const quizId = yield select(selectSelectedId('quizId'))
    const url = SURVEY_ANSWER_API_URL.replace(':surveyId', quizId)

    yield call(request, url, {
      method: 'POST',
      data: answers,
    })

    yield put(actions.sendAnswersSuccess())
  } catch (e) {
    yield put(
      error({ message: messages.anErrorOcurredWhileSendingYourAnswers, autoDismiss: 5000 }),
    )
    yield put(actions.sendAnswersFailure(e))
  }
}

export default function* quizSaga() {
  yield all([
    takeLatest(FETCH_QUIZ, fetchQuiz),
    takeLatest(SEND_ANSWERS, sendQuizAnswer),
  ])
}
