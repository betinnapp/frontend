/*
 *
 * Notifications reducer
 *
 */
import produce from 'immer'
import { ADD_NOTIFICATION } from './constants'

export const initialState = {
  resource: [],
}

/* eslint-disable default-case, no-param-reassign */
const notificationsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ADD_NOTIFICATION:
        state.resource.push({
          feedback: action.feedback,
          message: action.message,
        })
        break
    }
  })

export default notificationsReducer
