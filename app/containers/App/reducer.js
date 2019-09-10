/*
 *
 * Common app reducer
 *
 */
import produce from 'immer'
import { SAVE_USER_INFORMATION } from './constants'

export const initialState = {
  userInformation: {},
}

/* eslint-disable default-case, no-param-reassign */
const commonAppReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SAVE_USER_INFORMATION:
        draft.userInformation = action.user
        break
    }
  })

export default commonAppReducer
