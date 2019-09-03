/*
 * RegisterPage Messages
 *
 * This contains all the text for the RegisterPage container.
 */

import { defineMessages } from 'react-intl'
import commonMessages from 'containers/App/messages'

export const scope = 'app.containers.RegisterPage'

const messages = defineMessages({
  tellAboutYou: {
    id: `${scope}.tellAboutYou`,
    defaultMessage: 'Conte sobre você',
  },
  answer: {
    id: `${scope}.answer`,
    defaultMessage: 'Resposta',
  },
  createAccount: {
    id: `${scope}.createAccount`,
    defaultMessage: 'Criar Conta',
  },
  true: {
    id: `${scope}.true`,
    defaultMessage: 'Sim',
  },
  false: {
    id: `${scope}.false`,
    defaultMessage: 'Não',
  },
  LETS_DO_THIS: {
    id: `${scope}.LETS_DO_THIS`,
    defaultMessage: 'Sem problemas',
  },
  NEVER_DO_THIS: {
    id: `${scope}.NEVER_DO_THIS`,
    defaultMessage: 'Tenho medo',
  },
  QUESTION_FIRST_NAME: {
    id: `${scope}.QUESTION_FIRST_NAME`,
    defaultMessage: 'Qual o seu nome?',
  },
  QUESTION_LAST_NAME: {
    id: `${scope}.QUESTION_LAST_NAME`,
    defaultMessage: 'Qual o seu sobrenome?',
  },
  QUESTION_AGE: {
    id: `${scope}.QUESTION_AGE`,
    defaultMessage: 'Qual a sua idade?',
  },
  QUESTION_SHORTNAME: {
    id: `${scope}.QUESTION_SHORTNAME`,
    defaultMessage: 'Como podemos te chamar (apelido)?',
  },
  QUESTION_EMAIL: {
    id: `${scope}.QUESTION_EMAIL`,
    defaultMessage: 'Qual o seu e-mail?',
  },
  QUESTION_WORK: {
    id: `${scope}.QUESTION_WORK`,
    defaultMessage: 'Você trabalha?',
  },
  QUESTION_INVESTIMENT_TODAY: {
    id: `${scope}.QUESTION_INVESTIMENT_TODAY`,
    defaultMessage: 'Você investe hoje?',
  },
  QUESTION_ALREADY_INVESTED: {
    id: `${scope}.QUESTION_ALREADY_INVESTED`,
    defaultMessage: 'Já investiu alguma vez?',
  },
  QUESTION_THOUGHT_ABOUT_INVESTING_OUT_OF_USUAL_BANK: {
    id: `${scope}.QUESTION_THOUGHT_ABOUT_INVESTING_OUT_OF_USUAL_BANK`,
    defaultMessage:
      'O que pensa logo que ouve sobre investir seu dinheiro fora da poupança?',
  },
  finishRegister: {
    id: `${scope}.finishRegister`,
    defaultMessage: 'Terminar cadastro',
  },
  weAreAlmostFinishing: {
    id: `${scope}.weAreAlmostFinishing`,
    defaultMessage:
      'Estamos quase acabando e logo você desfrutará do aprendizado sobre o mundo financeiro',
  },
  pleaseInformYourPasswordToFinish: {
    id: `${scope}.pleaseInformYourPasswordToFinish`,
    defaultMessage: 'Por favor informe sua senha para terminar o cadastro',
  },
  password: {
    id: `${scope}.password`,
    defaultMessage: 'Senha',
  },
  confirmPassword: {
    id: `${scope}.confirmPassword`,
    defaultMessage: 'Confirme a senha',
  },
  passwordsDoNotMatch: {
    id: `${scope}.passwordsDoNotMatch`,
    defaultMessage: 'Senhas não coincidem',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
