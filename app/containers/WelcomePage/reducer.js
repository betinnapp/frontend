/*
 *
 * WelcomePage reducer
 *
 */
import produce from 'immer'
import {
  FETCH_QUICK_MODULES_LIST,
  FETCH_QUICK_MODULES_LIST_SUCCESS,
  FETCH_QUICK_MODULES_LIST_FAILURE,
} from './constants'

export const initialState = {
  modulesList: {
    resource: [],
    error: null,
    isLoading: false,
  },
}

/* eslint-disable default-case, no-param-reassign */
const welcomePageReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case FETCH_QUICK_MODULES_LIST:
      draft.modulesList.isLoading = true
      break
    case FETCH_QUICK_MODULES_LIST_SUCCESS:
      draft.modulesList.isLoading = false
      draft.modulesList.resource = action.response
      break
    case FETCH_QUICK_MODULES_LIST_FAILURE:
      draft.modulesList.isLoading = false
      draft.modulesList.error = action.error
      break
  }
})

export default welcomePageReducer
