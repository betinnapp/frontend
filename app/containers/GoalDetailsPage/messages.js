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
  investmentType: {
    id: `${scope}.investmentType`,
    defaultMessage: 'Tipo de investimento',
  },
  investmentTime: {
    id: `${scope}.investmentTime`,
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
  anErrorOccurredWhileLoadingYourGoalDetails: {
    id: `${scope}.anErrorOccurredWhileLoadingYourGoalDetails`,
    defaultMessage: 'Ocorreu um erro enquanto carregavamos os detalhes da sua meta, tente novamente mais tarde!',
  },
  depositValue: {
    id: `${scope}.depositValue`,
    defaultMessage: 'Valor do depósito',
  },
  saveGoal: {
    id: `${scope}.saveGoal`,
    defaultMessage: 'Salvar',
  },
  deleteGoal: {
    id: `${scope}.deleteGoal`,
    defaultMessage: 'Deletar',
  },
  goal: {
    id: `${scope}.goal`,
    defaultMessage: 'Meta',
  },
  anErrorOccurredWhileUpdatingYourGoalDetails: {
    id: `${scope}.anErrorOccurredWhileUpdatingYourGoalDetails`,
    defaultMessage: 'Ocorreu um erro enquanto atualizávamos os detalhes da sua meta, tente novamente mais tarde!',
  },
  goalUpdatedSuccessfully: {
    id: `${scope}.goalUpdatedSuccessfully`,
    defaultMessage: 'Meta atualizada com sucesso!',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
