/*
 * App Messages
 *
 * This contains all the common text for the application.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.containers.App'

export default defineMessages({
  betinnapp: {
    id: `${scope}.betinnapp`,
    defaultMessage: 'Betinnapp',
  },
  unableToLoadContent: {
    id: `${scope}.unableToLoadContent`,
    defaultMessage: 'Desculpa, não fomos capazes de carregar este conteúdo. Tente novamente mais tarde!',
  },
  // Fields label
  user: {
    id: `${scope}.user`,
    defaultMessage: 'Usuário',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Senha',
  },
  required: {
    id: `${scope}.required`,
    defaultMessage: 'Obrigatório',
  },
})
