/*
 *
 * SubmodulesList reducer
 *
 */
import produce from 'immer'
import {
  FETCH_MODULE_DETAILS,
  FETCH_MODULE_DETAILS_SUCCESS,
  FETCH_MODULE_DETAILS_FAILURE,
} from './constants'

export const initialState = {
  resource: {},
  isLoading: false,
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
const submodulesListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_MODULE_DETAILS:
        draft.isLoading = true
        break
      case FETCH_MODULE_DETAILS_SUCCESS:
        draft.resource = action.response
        draft.isLoading = false
        break
      case FETCH_MODULE_DETAILS_FAILURE:
        draft.isLoading = false
        draft.error = action.error
        break
    }
  })

export default submodulesListReducer
