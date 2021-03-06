/*
 *
 * Quiz actions
 *
 */

import {
  ANSWER_QUIZ,
  COMPLETE_SUBMOULE,
  FETCH_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  SET_NEXT_QUESTION_AS_VISIBLE,
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

export function setNextQuestionAsVisible() {
  return {
    type: SET_NEXT_QUESTION_AS_VISIBLE,
  }
}

export function completeSubmodule(moduleId, submoduleId, redirectUrl) {
  return {
    type: COMPLETE_SUBMOULE,
    moduleId,
    submoduleId,
    redirectUrl,
  }
}
