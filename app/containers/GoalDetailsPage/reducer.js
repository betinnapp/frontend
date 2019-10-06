/*
 *
 * GoalDetailsPage reducer
 *
 */
import produce from 'immer'
import {
  FETCH_INVESTIMENT_TYPES,
  FETCH_INVESTIMENT_TYPES_SUCCESS,
  FETCH_INVESTIMENT_TYPES_FAILURE,
} from './constants'

export const initialState = {
  investimentTypes: {
    resource: [],
    isLoading: false,
    error: null,
  },
}

/* eslint-disable default-case, no-param-reassign */
const goalDetailsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_INVESTIMENT_TYPES:
        draft.investimentTypes.isLoading = true
        break
      case FETCH_INVESTIMENT_TYPES_SUCCESS:
        draft.investimentTypes.isLoading = false
        draft.investimentTypes.resource = action.response
        break
      case FETCH_INVESTIMENT_TYPES_FAILURE:
        draft.investimentTypes.isLoading = false
        draft.investimentTypes.error = action.error
        break
    }
  })

export default goalDetailsPageReducer
