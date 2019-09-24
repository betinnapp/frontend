/*
 *
 * Quiz reducer
 *
 */
import produce from 'immer'
import {
  FETCH_QUIZ,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
} from './constants'

export const initialState = {
  quizContent: {},
  isLoading: false,
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
const quizReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case FETCH_QUIZ:
      draft.isLoading = true
      break
    case FETCH_QUIZ_SUCCESS:
      draft.quizContent = action.response
      draft.isLoading = false
      break
    case FETCH_QUIZ_FAILURE:
      draft.error = action.error
      draft.isLoading = false
      break
  }
})

export default quizReducer
