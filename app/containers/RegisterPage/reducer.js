/*
 *
 * RegisterPage reducer
 *
 */
import produce from 'immer'
import { ANSWER_QUESTION, REGISTER_QUESTIONS } from './constants'

export const initialState = {
  questions: REGISTER_QUESTIONS,
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
        draft.questions[questionIndex + 1].waitingAnswer = true
        break
      }
    }
  })

export default registerPageReducer
