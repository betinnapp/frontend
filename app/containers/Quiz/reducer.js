/*
 *
 * Quiz reducer
 *
 */
import produce from 'immer'
import { LOCATION_CHANGE } from 'connected-react-router'

import {
  ANSWER_QUIZ,
  FETCH_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  SET_NEXT_QUESTION_AS_VISIBLE,
  SEND_ANSWER,
  SEND_ANSWER_FAILURE,
  SEND_ANSWER_SUCCESS,
} from './constants'

export const initialState = {
  questions: [],
  visibleQuestion: null,
  isLoading: false,
  error: null,
  answers: {},
}

/* eslint-disable default-case, no-param-reassign */
const quizReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case SEND_ANSWER:
    case FETCH_QUIZ:
      draft.isLoading = true
      break
    case FETCH_QUIZ_SUCCESS: {
      const { questions } = action.response
      const [firstQuestion] = questions

      draft.questions = questions
      draft.visibleQuestion = firstQuestion
      draft.isLoading = false
      break
    }
    case SEND_ANSWER_FAILURE:
    case FETCH_QUIZ_FAILURE:
      draft.error = action.error
      draft.isLoading = false
      break
    case ANSWER_QUIZ:
      draft.answers[action.questionId] = action.optionId
      break
    case SET_NEXT_QUESTION_AS_VISIBLE: {
      const visibleQuestionIndex = draft.questions.findIndex(
        question => question.id === draft.visibleQuestion.id
      )
      draft.visibleQuestion = draft.questions[visibleQuestionIndex + 1]
      break
    }
    case SEND_ANSWER_SUCCESS:
      draft.isLoading = false
      break
    case LOCATION_CHANGE:
      draft.questions = initialState.questions
      draft.visibleQuestion = initialState.visibleQuestion
      draft.isLoading = initialState.isLoading
      draft.error = initialState.error
      draft.answers = initialState.answers
      break
  }
})

export default quizReducer
