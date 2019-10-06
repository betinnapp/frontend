/*
 * GoalDetailsPage Messages
 *
 * This contains all the text for the GoalDetailsPage container.
 */

import { defineMessages } from 'react-intl'
import commonMessages from 'containers/App/messages'

export const scope = 'app.containers.GoalDetailsPage'

const messages = defineMessages({
  grossTotal: {
    id: `${scope}.grossTotal`,
    defaultMessage: 'Total bruto',
  },
  depositedTotal: {
    id: `${scope}.depositedTotal`,
    defaultMessage: 'Total depositado',
  },
  totalTax: {
    id: `${scope}.totalTax`,
    defaultMessage: 'Imposto sobre o total',
  },
  interestEarnedInThePeriod: {
    id: `${scope}.interestEarnedInThePeriod`,
    defaultMessage: 'Juros ganho no período',
  },
  investimentType: {
    id: `${scope}.investimentType`,
    defaultMessage: 'Tipo de investimento',
  },
  investimentTime: {
    id: `${scope}.investimentTime`,
    defaultMessage: 'Tempo de investimento',
  },
  goalName: {
    id: `${scope}.goalName`,
    defaultMessage: 'Nome da meta',
  },
  initialValue: {
    id: `${scope}.initialValue`,
    defaultMessage: 'Valor inicial',
  },
  monthlyDeposit: {
    id: `${scope}.monthlyDeposit`,
    defaultMessage: 'Depósito mensal',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
