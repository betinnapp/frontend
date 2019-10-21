import {
  takeLatest,
  call,
  put,
  select,
  all,
} from 'redux-saga/effects'
import { error, success } from 'react-notification-system-redux'

import history from 'utils/history'
import request from 'utils/request'
import {
  SURVEY_API_URL,
  SURVEY_QUESTION_ANSWER_API_URL,
  SUBMODULE_COMPLETED_API_URL,
} from 'containers/App/urls'
import { selectSelectedId } from 'containers/App/selectors'

import {
  ANSWER_QUIZ,
  COMPLETE_SUBMOULE,
  FETCH_QUIZ,
} from './constants'
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

function* answerQuiz(action) {
  try {
    const { questionId, optionId } = action
    const quizId = yield select(selectSelectedId('quizId'))

    const url = SURVEY_QUESTION_ANSWER_API_URL
      .replace(':surveyId', quizId)
      .replace(':questionId', questionId)

    yield call(request, url, {
      method: 'POST',
      data: { optionId },
    })
  } catch (e) {
    yield put(
      error({ message: messages.anErrorOccurredWhileSendingYourAnswer, autoDismiss: 5000 }),
    )
  }
}

function* completeSubmodule(action) {
  try {
    const { moduleId, submoduleId, redirectUrl } = action
    const url = SUBMODULE_COMPLETED_API_URL
      .replace(':moduleId', moduleId)
      .replace(':submoduleId', submoduleId)

    yield call(request, url, { method: 'POST' })

    if (redirectUrl) {
      history.push(redirectUrl)
    }

    yield put(success({ message: messages.congratulationsSubmoduleCompleted, autoDismiss: 8000 }))
  } catch (e) {
    yield put(error({ message: messages.anErrorOccurredWhileCompletingSubmodule, autoDismiss: 8000 }))
  }
}

export default function* quizSaga() {
  yield all([
    takeLatest(FETCH_QUIZ, fetchQuiz),
    takeLatest(ANSWER_QUIZ, answerQuiz),
    takeLatest(COMPLETE_SUBMOULE, completeSubmodule),
  ])
}
