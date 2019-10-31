/*
 *
 * ThanosT7 reducer
 *
 */
import produce from 'immer'
import { FETCH_API_SUCCESS } from './constants'

export const initialState = {}

/* eslint-disable default-case, no-param-reassign */
const thanosT7Reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_API_SUCCESS:
        draft[action.stateKey] = action.response
        break
    }
  })

export default thanosT7Reducer
