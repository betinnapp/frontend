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
  }
})

export default {
  ...commonMessages,
  ...messages,
}
