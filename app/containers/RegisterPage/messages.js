/*
 * RegisterPage Messages
 *
 * This contains all the text for the RegisterPage container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.RegisterPage'

export default defineMessages({
  tellAboutYou: {
    id: `${scope}.tellAboutYou`,
    defaultMessage: 'Conte sobre você',
  },
  answer: {
    id: `${scope}.answer`,
    defaultMessage: 'Resposta',
  },
  YES: {
    id: `${scope}.YES`,
    defaultMessage: 'Sim',
  },
  NO: {
    id: `${scope}.NO`,
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
  QUESTION_NAME: {
    id: `${scope}.QUESTION_NAME`,
    defaultMessage: 'Qual o seu nome?',
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
  QUESTION_MONTHLY_INCOME: {
    id: `${scope}.QUESTION_MONTHLY_INCOME`,
    defaultMessage: 'Qual a sua renda mensal?',
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
      'O que pensa logo que ouve sobre investir seu dinheiro fora da poupança',
  },
  QUESTION_PASSWORD: {
    id: `${scope}.QUESTION_PASSWORD`,
    defaultMessage: 'Por favor informe uma senha para acessar sua conta.',
  },
  QUESTION_PASSWORD_CONFIRMATION: {
    id: `${scope}.QUESTION_PASSWORD_CONFIRMATION`,
    defaultMessage: 'Confirme a senha digitada anteriormente.',
  },
})
