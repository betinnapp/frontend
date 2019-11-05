/*
 *
 * FetchReducer reducer
 *
 */
import produce from 'immer'
import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from './constants'

export const initialState = {}

/* eslint-disable default-case, no-param-reassign */
const fetchReducerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FETCH:
      case FETCH_SUCCESS:
      case FETCH_FAILURE:
        break
    }
  })

export default fetchReducerReducer
