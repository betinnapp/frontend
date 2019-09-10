/*
 *
 * SubmoduleContent reducer
 *
 */
import produce from 'immer'
import { FETCH_SUBMODULE_CONTENT } from './constants'

export const initialState = {
  isLoading: false,
}

/* eslint-disable default-case, no-param-reassign */
const submoduleContentReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_SUBMODULE_CONTENT:
        draft.isLoading = true
        break
    }
  })

export default submoduleContentReducer
