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
  firstName: {
    id: `${scope}.firstName`,
    defaultMessage: 'Nome',
  },
  lastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Sobrenome',
  },
  shortName: {
    id: `${scope}.shortName`,
    defaultMessage: 'Apelido',
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
  yes: {
    id: `${scope}.yes`,
    defaultMessage: 'Sim',
  },
  no: {
    id: `${scope}.no`,
    defaultMessage: 'Não',
  },
  changesSuccessfullySaved: {
    id: `${scope}.changesSuccessfullySaved`,
    defaultMessage: 'Mudanças salvas com sucesso!',
  },
  anErrorOccurredWhileSavingYourInformation: {
    id: `${scope}.anErrorOccurredWhileSavingYourInformation`,
    defaultMessage: 'Ocorreu um erro enquanto salvamos suas informações, tente novamente mais tarde!',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
