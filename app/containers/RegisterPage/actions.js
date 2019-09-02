/*
 *
 * RegisterPage actions
 *
 */

import {
  ANSWER_QUESTION,
  FINISH_QUESTIONS,
  SUBMIT_REGISTER,
  SUBMIT_REGISTER_SUCCESS,
  SUBMIT_REGISTER_FAILURE,
} from './constants'

export function answerQuestion(questionId, answer) {
  return {
    type: ANSWER_QUESTION,
    questionId,
    answer,
  }
}

export function finishQuestions() {
  return {
    type: FINISH_QUESTIONS,
  }
}

export function submitRegister() {
  return {
    type: SUBMIT_REGISTER,
  }
}

export function submitRegisterSuccess() {
  return {
    type: SUBMIT_REGISTER_SUCCESS,
  }
}

export function submitRegisterFailure(error) {
  return {
    type: SUBMIT_REGISTER_FAILURE,
    error,
  }
}