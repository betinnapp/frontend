/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.LoginPage'

export default defineMessages({
  welcome: {
    id: `${scope}.welcome`,
    defaultMessage: 'Bem-vindo!',
  },
  weHaveALotToLearn: {
    id: `${scope}.weHaveALotToLearn`,
    defaultMessage: 'Temos muito o que aprender.',
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Esqueceu a senha?',
  },
  beginSession: {
    id: `${scope}.beginSession`,
    defaultMessage: 'Iniciar Sessão',
  },
})
