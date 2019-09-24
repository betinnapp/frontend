/*
 *
 * Quiz actions
 *
 */

import {
  FETCH_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE
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
