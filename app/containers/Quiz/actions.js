/*
 *
 * Quiz actions
 *
 */

import {
  ANSWER_QUIZ,
  FETCH_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
} from './constants'

export function fetchQuiz(quizId) {
  return {
    type: FETCH_QUIZ,
    quizId,
  }
}

export function fetchQuizSuccess(response) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    response,
  }
}

export function fetchQuizFailure(error) {
  return {
    type: FETCH_QUIZ_FAILURE,
    error,
  }
}

export function answerQuiz(questionId, optionId) {
  return {
    type: ANSWER_QUIZ,
    questionId,
    optionId,
  }
}
