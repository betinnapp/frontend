/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.containers.HomePage'

export default defineMessages({
  learnToManagerYourFinances: {
    id: `${scope}.learnToManagerYourFinances`,
    defaultMessage: 'Aprenda a gerenciar suas finanças de graça.',
  },
  startNow: {
    id: `${scope}.startNow`,
    defaultMessage: 'Comece agora',
  },
})
