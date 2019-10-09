/*
 * GoalsListPage Messages
 *
 * This contains all the text for the GoalsListPage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.GoalsListPage'

export default defineMessages({
  makeSimulation: {
    id: `${scope}.makeSimulation`,
    defaultMessage: 'Fazer Simulação',
  },
  myGoals: {
    id: `${scope}.myGoals`,
    defaultMessage: 'Minhas metas',
  },
  quantityOfTotal: {
    id: `${scope}.quantityOfTotal`,
    defaultMessage: '{quantity} de {total}',
  },
})
