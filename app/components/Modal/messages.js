/*
 * Modal Messages
 *
 * This contains all the text for the Modal component.
 */

import { defineMessages } from 'react-intl'
import commonMessages from 'containers/App/messages'

export const scope = 'app.components.Modal'

const messages = defineMessages({
  cancel: {
    id: `${scope}.cancel`,
    defaultMessage: 'Cancelar',
  },
  confirm: {
    id: `${scope}.confirm`,
    defaultMessage: 'Confirmar',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
