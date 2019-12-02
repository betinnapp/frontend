/*
 * ModulesListPage Messages
 *
 * This contains all the text for the ModulesListPage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.ModulesListPage'

export default defineMessages({
  unableToLoadModulesList: {
    id: `${scope}.unableToLoadModulesList`,
    defaultMessage:
      'Desculpa, não fomos capazes de carregar a lista de módulos, tente novamente mais tarde!',
  },
  start: {
    id: `${scope}.start`,
    defaultMessage: 'Iniciar',
  },
  coins: {
    id: `${scope}.coins`,
    defaultMessage: 'Moedas',
  },
})
