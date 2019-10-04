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
    defaultMessage: `Bem vindo{
      username, select,
        null {!}
        undefined {!}
        other {, {username}}
    }`,
  },
  seeAvailableModules: {
    id: `${scope}.seeAvailableModules`,
    defaultMessage: 'Visualizar módulos disponíveis',
  },
  keepLearning: {
    id: `${scope}.keepLearning`,
    defaultMessage: 'Continue aprendendo...',
  },
  anErrorOccurredWhileLoadingModules: {
    id: `${scope}.anErrorOccurredWhileLoadingModules`,
    defaultMessage: 'Ocorreu um erro enquanto carregavamos os módulos para acesso rápido. Tente novamente mais tarde!',
  },
})
