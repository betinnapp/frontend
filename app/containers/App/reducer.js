/*
 *
 * Common app reducer
 *
 */
import produce from 'immer'
import {
  SAVE_USER_INFORMATION,
  SET_SELECTED_ID,
  DELETE_SELECTED_ID,
  FETCH_USER_COINS_SUCCESS,
} from './constants'

export const initialState = {
  userInformation: {},
  selectedIds: {},
  userCoins: null,
}

/* eslint-disable default-case, no-param-reassign */
const commonAppReducer = (state = initialState, action) => produce(state, draft => {
  switch (action.type) {
    case SAVE_USER_INFORMATION:
      draft.userInformation = action.user
      break
    case SET_SELECTED_ID:
      draft.selectedIds[action.key] = action.value
      break
    case DELETE_SELECTED_ID:
      delete draft.selectedIds[action.key]
      break
    case FETCH_USER_COINS_SUCCESS:
      draft.userCoins = action.coins
      break
  }
})

export default commonAppReducer
