/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer'
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants'

export const initialState = {
  isLoading: false,
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.isLoading = true
        break
      case LOGIN_SUCCESS: {
        draft.isLoading = false
        draft.error = null
        break
      }
      case LOGIN_FAILURE:
        draft.isLoading = false
        draft.error = action.error
        break
    }
  })

export default loginPageReducer
