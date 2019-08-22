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
  userDetails: {
    id: null,
    firstName: null,
    lastName: null,
    birthDate: null,
    email: null,
    preferences: {},
  },
}

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.isLoading = true
        break
      case LOGIN_SUCCESS: {
        const { response } = action
        delete response.token

        draft.isLoading = false
        draft.error = null
        draft.userDetails = response
        break
      }
      case LOGIN_FAILURE:
        draft.isLoading = false
        draft.error = action.error
        break
    }
  })

export default loginPageReducer
