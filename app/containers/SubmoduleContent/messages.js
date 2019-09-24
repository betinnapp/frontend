/*
 * SubmoduleContent Messages
 *
 * This contains all the text for the SubmoduleContent container.
 */

import { defineMessages } from 'react-intl'
import commonMessages from 'containers/App/messages'

export const scope = 'app.containers.SubmoduleContent'

const messages = defineMessages({
  startQuiz: {
    id: `${scope}.startQuiz`,
    defaultMessage: 'Iniciar testes',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
