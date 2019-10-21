/*
 *
 * UserFormPage reducer
 *
 */
import produce from 'immer'
import {
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAILURE,
} from './constants'

export const initialState = {
  resource: {},
  isLoading: false,
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
const userFormPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVE_USER:
        draft.isLoading = true
        break
      case SAVE_USER_SUCCESS:
        draft.isLoading = false
        break
      case SAVE_USER_FAILURE:
        draft.isLoading = false
        draft.error = action.error
        break
    }
  })

export default userFormPageReducer
