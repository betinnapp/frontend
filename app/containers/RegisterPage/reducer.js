/*
 *
 * RegisterPage reducer
 *
 */
import produce from 'immer'
import {
  ANSWER_QUESTION,
  REGISTER_QUESTIONS,
  SUBMIT_REGISTER,
} from './constants'

export const initialState = {
  questions: REGISTER_QUESTIONS,
  isLoading: false,
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
const registerPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ANSWER_QUESTION: {
        const { questionId, answer } = action

        const questionIndex = draft.questions.findIndex(
          question => question.id === questionId,
        )

        draft.questions[questionIndex].answer = answer
        draft.questions[questionIndex].waitingAnswer = false

        // Setting next question to wait answer if not the last one
        if (draft.questions.length !== questionIndex + 1) {
          draft.questions[questionIndex + 1].waitingAnswer = true
        }

        break
      }
      case SUBMIT_REGISTER:
        draft.isLoading = true
        break
    }
  })

export default registerPageReducer
