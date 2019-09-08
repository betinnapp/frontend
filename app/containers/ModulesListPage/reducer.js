/*
 *
 * ModulesListPage reducer
 *
 */
import produce from 'immer'
import {
  FETCH_MODULES_LIST,
  FETCH_MODULES_LIST_SUCCESS,
  FETCH_MODULES_LIST_FAILURE,
} from './constants'

export const initialState = {
  resource: [],
  isLoading: false,
  error: null,
}

/* eslint-disable default-case, no-param-reassign */
const modulesListPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_MODULES_LIST:
        draft.isLoading = true
        break
      case FETCH_MODULES_LIST_SUCCESS:
        draft.isLoading = false
        draft.resource = action.response
        draft.error = null
        break
      case FETCH_MODULES_LIST_FAILURE:
        draft.isLoading = false
        draft.error = action.error
    }
  })

export default modulesListPageReducer
