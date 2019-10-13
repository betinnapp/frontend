/*
 *
 * GoalDetailsPage reducer
 *
 */
import produce from 'immer'
import {
  FETCH_INVESTMENT_TYPES,
  FETCH_INVESTMENT_TYPES_SUCCESS,
  FETCH_INVESTMENT_TYPES_FAILURE,
  FETCH_GOAL,
  FETCH_GOAL_SUCCESS,
  FETCH_GOAL_FAILURE,
} from './constants'

export const initialState = {
  investmentTypes: {
    resource: [],
    isLoading: false,
    error: null,
  },
  goal: {
    resource: {},
    isLoading: false,
    error: null,
  },
}

/* eslint-disable default-case, no-param-reassign */
const goalDetailsPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_INVESTMENT_TYPES:
        draft.investmentTypes.isLoading = true
        break
      case FETCH_INVESTMENT_TYPES_SUCCESS:
        draft.investmentTypes.isLoading = false
        draft.investmentTypes.resource = action.response
        break
      case FETCH_INVESTMENT_TYPES_FAILURE:
        draft.investmentTypes.isLoading = false
        draft.investmentTypes.error = action.error
        break
      case FETCH_GOAL:
        draft.goal.isLoading = true
        break
      case FETCH_GOAL_SUCCESS:
        draft.goal.isLoading = false
        draft.goal.resource = action.response
        break
      case FETCH_GOAL_FAILURE:
        draft.goal.isLoading = false
        draft.goal.error = action.error
        break
    }
  })

export default goalDetailsPageReducer
