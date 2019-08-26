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
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ANSWER_QUESTION:
        break
    }
  })

export default registerPageReducer
