/*
 * UserFormPage Messages
 *
 * This contains all the text for the UserFormPage container.
 */

import { defineMessages } from 'react-intl'
import commonMessages from 'containers/App/messages'

export const scope = 'app.containers.UserFormPage'

const messages = defineMessages({
  personalInformation: {
    id: `${scope}.personalInformation`,
    defaultMessage: 'Informações Pessoais',
  },
  fullName: {
    id: `${scope}.fullName`,
    defaultMessage: 'Nome Completo',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'E-mail',
  },
  birthDate: {
    id: `${scope}.birthDate`,
    defaultMessage: 'Data de nascimento',
  },
  work: {
    id: `${scope}.work`,
    defaultMessage: 'Trabalho',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
