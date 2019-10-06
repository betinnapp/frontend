/*
 * GoalDetailsPage Messages
 *
 * This contains all the text for the GoalDetailsPage container.
 */

import { defineMessages } from 'react-intl'
import commonMessages from 'containers/App/messages'

export const scope = 'app.containers.GoalDetailsPage'

const messages = defineMessages({
  netTotal: {
    id: `${scope}.netTotal`,
    defaultMessage: 'Total líquido',
  },
  depositedTotal: {
    id: `${scope}.depositedTotal`,
    defaultMessage: 'Total depositado',
  },
  totalTax: {
    id: `${scope}.totalTax`,
    defaultMessage: 'Imposto sobre os juros',
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
  saveAsGoal: {
    id: `${scope}.saveAsGoal`,
    defaultMessage: 'Salvar como meta',
  },
  goalSuccessfullyCreated: {
    id: `${scope}.goalSuccessfullyCreated`,
    defaultMessage: 'Meta criada com sucesso!',
  },
  anErrorOccurredWhileCreatingYourGoal: {
    id: `${scope}.anErrorOccurredWhileCreatingYourGoal`,
    defaultMessage: 'Ocorreu um erro enquanto criavamos sua meta, tente novamente mais tarde!',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
