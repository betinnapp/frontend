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
  SECURITY: {
    id: `${scope}.SECURITY`,
    defaultMessage: 'Segurança',
  },
  PROFIT: {
    id: `${scope}.PROFIT`,
    defaultMessage: 'Rendimento',
  },
  QUESTION_FIRST_NAME: {
    id: `${scope}.QUESTION_FIRST_NAME`,
    defaultMessage: 'Qual o seu nome?',
  },
  QUESTION_LAST_NAME: {
    id: `${scope}.QUESTION_LAST_NAME`,
    defaultMessage: 'Qual o seu sobrenome?',
  },
  QUESTION_BIRTH_DATE: {
    id: `${scope}.QUESTION_BIRTH_DATE`,
    defaultMessage: 'Qual a sua data de nascimento?',
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
  QUESTION_PLAN_YOUR_BILLS: {
    id: `${scope}.QUESTION_PLAN_YOUR_BILLS`,
    defaultMessage: 'Você planeja seus gastos hoje?',
  },
  QUESTION_INVESTMENT_TODAY: {
    id: `${scope}.QUESTION_INVESTMENT_TODAY`,
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
  QUESTION_PREFER_SECURITY_OR_PROFIT: {
    id: `${scope}.QUESTION_PREFER_SECURITY_OR_PROFIT`,
    defaultMessage: 'Se fosse investir agora, o que lhe importa mais, segurança ou rendimento?',
  },
  QUESTION_KNOW_THE_DIFFERENCE_BETWEEN_CDB_AND_CDI: {
    id: `${scope}.QUESTION_KNOW_THE_DIFFERENCE_BETWEEN_CDB_AND_CDI`,
    defaultMessage: 'Sabe a diferença entre CDB e CDI?',
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
  passwordRequirements: {
    id: `${scope}.passwordRequirements`,
    defaultMessage:
      'Senha deve possuir no mínimo 8 caracteres, 1 minúsculo, 1 maiscúlo, 1 número e um caractér especial',
  },
  wrongEmail: {
    id: `${scope}.wrongEmail`,
    defaultMessage: 'E-mail inválido',
  },
})

export default {
  ...commonMessages,
  ...messages,
}
