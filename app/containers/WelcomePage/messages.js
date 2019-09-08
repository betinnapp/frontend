/*
 * WelcomePage Messages
 *
 * This contains all the text for the WelcomePage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.WelcomePage'

export default defineMessages({
  welcomeUser: {
    id: `${scope}.welcomeUser`,
    defaultMessage: 'Bem vindo, {username}',
  },
  seeAvailableModules: {
    id: `${scope}.seeAvailableModules`,
    defaultMessage: 'Visualizar módulos disponíveis',
  },
})
