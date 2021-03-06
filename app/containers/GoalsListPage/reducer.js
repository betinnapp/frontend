/*
 *
 * GoalsListPage reducer
 *
 */
import produce from 'immer'
import {
  FETCH_GOALS_LIST,
  FETCH_GOALS_LIST_SUCCESS,
  FETCH_GOALS_LIST_FAILURE,
} from './constants'

export const initialState = {
  goalsList: {
    resource: [],
    isLoading: false,
    error: null,
    loaded: false,
  },
}

/* eslint-disable default-case, no-param-reassign */
const goalsListPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_GOALS_LIST:
        draft.goalsList.isLoading = true
        draft.goalsList.loaded = false
        break
      case FETCH_GOALS_LIST_SUCCESS:
        draft.goalsList.isLoading = false
        draft.goalsList.resource = action.response
        draft.goalsList.loaded = true
        break
      case FETCH_GOALS_LIST_FAILURE:
        draft.goalsList.isLoading = false
        draft.goalsList.error = action.error
        draft.goalsList.loaded = true
        break
    }
  })

export default goalsListPageReducer
