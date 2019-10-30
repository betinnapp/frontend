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
  save: {
    id: `${scope}.save`,
    defaultMessage: 'Salvar',
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
  needToBeMoreRecentDate: {
    id: `${scope}.needToBeMoreRecentDate`,
    defaultMessage: 'Data precisa ser mais recente',
  },
  smallerThanActualDate: {
    id: `${scope}.smallerThanActualDate`,
    defaultMessage: 'Data precisa menor que a data atual',
  },
})
