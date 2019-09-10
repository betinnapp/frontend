/*
 *
 * SubmoduleContent reducer
 *
 */
import produce from 'immer'
import {
  FETCH_SUBMODULE_CONTENT,
  FETCH_SUBMODULE_CONTENT_SUCCESS,
  FETCH_SUBMODULE_CONTENT_FAILURE,
} from './constants'

export const initialState = {
  resource: {},
  isLoading: false,
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
const submoduleContentReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_SUBMODULE_CONTENT:
        draft.isLoading = true
        break
      case FETCH_SUBMODULE_CONTENT_SUCCESS:
        draft.isLoading = false
        draft.resource = action.response
        break
      case FETCH_SUBMODULE_CONTENT_FAILURE:
        draft.isLoading = false
        draft.error = action.error
        break
    }
  })

export default submoduleContentReducer
