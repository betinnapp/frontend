/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { connectRouter } from 'connected-react-router'
import languageProviderReducer from 'containers/LanguageProvider/reducer'
import { reducer as notifications } from 'react-notification-system-redux'
import { combineReducers } from 'redux'
import history from 'utils/history'
import commonReducer from 'containers/App/reducer'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    notifications,
    common: commonReducer,
    ...injectedReducers,
  })

  return rootReducer
}
