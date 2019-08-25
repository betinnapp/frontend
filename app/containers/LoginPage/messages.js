/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage container.
 */

import { defineMessages } from 'react-intl'
import commonMessages from 'containers/App/messages'

export const scope = 'app.containers.LoginPage'

const messages = defineMessages({
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
  required: {
    id: `${scope}.required`,
    defaultMessage: 'Obrigatório',
  },
  invalidLogin: {
    id: `${scope}.invalidLogin`,
    defaultMessage: 'Usuário e/ou senha estão inválidos',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
