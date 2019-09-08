/*
 *
 * RegisterPage reducer
 *
 */
import produce from 'immer'
import { LOCATION_CHANGE } from 'connected-react-router'

import {
  ANSWER_QUESTION,
  REGISTER_QUESTIONS,
  SUBMIT_REGISTER,
  SUBMIT_REGISTER_FAILURE,
  SUBMIT_REGISTER_SUCCESS,
  FINISH_QUESTIONS,
} from './constants'

export const initialState = {
  questions: REGISTER_QUESTIONS,
  isLoading: false,
  error: null,
  finishedQuestions: false,
}

/* eslint-disable default-case, no-param-reassign */
const registerPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ANSWER_QUESTION: {
        const { questionId, answer } = action

        const questionIndex = draft.questions.findIndex(
          question =>
            question.id === questionId ||
            (question.questionOnAnswer || []).some(
              subQuestion => subQuestion.id === questionId,
            ),
        )

        const draftQuestion = draft.questions[questionIndex]
        if (draftQuestion.id === questionId) {
          draftQuestion.answer = answer
          draftQuestion.waitingAnswer = false

          const subQuestion = (draftQuestion.questionOnAnswer || []).find(
            question => question.questionAnswer === answer,
          )

          if (subQuestion) {
            subQuestion.waitingAnswer = true
            break
          }
        } else {
          // it's a sub question answer
          const subQuestion = draftQuestion.questionOnAnswer.find(
            question => question.id === questionId,
          )

          subQuestion.answer = answer
          subQuestion.waitingAnswer = false
        }

        if (draft.questions.length !== questionIndex + 1) {
          draft.questions[questionIndex + 1].waitingAnswer = true
        }

        break
      }
      case FINISH_QUESTIONS:
        draft.finishedQuestions = true
        break
      case SUBMIT_REGISTER:
        draft.isLoading = true
        break
      case SUBMIT_REGISTER_SUCCESS:
        draft.isLoading = false
        break
      case SUBMIT_REGISTER_FAILURE:
        draft.isLoading = false
        draft.error = action.error
        break
      case LOCATION_CHANGE:
        draft.questions = REGISTER_QUESTIONS
        draft.isLoading = false
        draft.error = null
        draft.finishedQuestions = false
        break
    }
  })

export default registerPageReducer
