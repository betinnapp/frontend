/*
 * Quiz Messages
 *
 * This contains all the text for the Quiz container.
 */

import { defineMessages } from 'react-intl'
import commonMessages from 'containers/App/messages'

export const scope = 'app.containers.Quiz'

const messages = defineMessages({
  confirmAnswer: {
    id: `${scope}.confirmAnswer`,
    defaultMessage: 'Confirmar Resposta',
  },
  anOptionIsRequired: {
    id: `${scope}.anOptionIsRequired`,
    defaultMessage: 'Selecionar uma opção é obrigatório',
  },
  answerSavedSuccessfully: {
    id: `${scope}.answerSavedSuccessfully`,
    defaultMessage: 'Resposta salva com sucesso!',
  },
  nextQuestion: {
    id: `${scope}.nextQuestion`,
    defaultMessage: 'Próxima pergunta',
  },
  finishQuiz: {
    id: `${scope}.finishQuiz`,
    defaultMessage: 'Terminar Quiz',
  },
  quizFinishedContinueLearning: {
    id: `${scope}.quizFinishedContinueLearning`,
    defaultMessage: 'Quiz finalizado, vá para o próximo conteúdo e continue aprendendo!',
  },
  answersResult: {
    id: `${scope}.answersResult`,
    defaultMessage: `Acertou {correctAnswersCount} {correctAnswersCount, plural,
      one {questão}
      other {questões}
    } de {questionsCount}.`,
  },
  continue: {
    id: `${scope}.continue`,
    defaultMessage: 'Continuar',
  },
  anErrorOccurredWhileSendingYourAnswer: {
    id: `${scope}.anErrorOccurredWhileSendingYourAnswer`,
    defaultMessage: 'Um erro ocorreu enquanto tentavamos enviar sua resposta. Tente novamente mais tarde.',
  },
  congratulationsSubmoduleCompleted: {
    id: `${scope}.congratulationsSubmoduleCompleted`,
    defaultMessage: 'Parabéns, submódulo concluído!',
  },
  anErrorOccurredWhileCompletingSubmodule: {
    id: `${scope}.anErrorOccurredWhileCompletingSubmodule`,
    defaultMessage: 'Ocorreu um erro durante a ação de completar o submódulo, por favor complete o quiz novamente!',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
