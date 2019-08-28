/*
 *
 * RegisterPage actions
 *
 */

import { ANSWER_QUESTION, SUBMIT_REGISTER } from './constants'

export function answerQuestion(questionId, answer) {
  return {
    type: ANSWER_QUESTION,
    questionId,
    answer,
  }
}

export function submitRegister() {
  return {
    type: SUBMIT_REGISTER,
  }
}
