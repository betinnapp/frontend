/*
 *
 * RegisterPage constants
 *
 */

export const ANSWER_QUESTION = 'app/RegisterPage/ANSWER_QUESTION'
export const FINISH_QUESTIONS = 'app/RegisterPage/FINISH_QUESTIONS'
export const SUBMIT_REGISTER = 'app/RegisterPage/SUBMIT_REGISTER'
export const SUBMIT_REGISTER_SUCCESS =
  'app/RegisterPage/SUBMIT_REGISTER_SUCCESS'
export const SUBMIT_REGISTER_FAILURE =
  'app/RegisterPage/SUBMIT_REGISTER_FAILURE'

export const REGISTER_QUESTIONS = [
  {
    id: 'QUESTION_FIRST_NAME',
    fieldPath: 'firstName',
    type: 'TEXT',
    waitingAnswer: true,
  },
  {
    id: 'QUESTION_LAST_NAME',
    fieldPath: 'lastName',
    type: 'TEXT',
  },
  {
    id: 'QUESTION_SHORTNAME',
    fieldPath: 'shortName',
    type: 'TEXT',
  },
  {
    id: 'QUESTION_BIRTH_DATE',
    fieldPath: 'birthDate',
    type: 'DATE',
  },
  {
    id: 'QUESTION_EMAIL',
    fieldPath: 'email',
    type: 'EMAIL',
  },
  {
    id: 'QUESTION_WORK',
    fieldPath: 'work',
    type: 'CHOICE',
    choices: [true, false],
  },
  {
    id: 'QUESTION_PLAN_YOUR_BILLS',
    type: 'CHOICE',
    choices: [true, false],
    scoreOnChoice: [
      {
        answer: true,
        score: 1,
      },
      {
        answer: false,
        score: 0.5,
      },
    ],
  },
  {
    id: 'QUESTION_ALREADY_INVESTED',
    type: 'CHOICE',
    choices: [true, false],
    scoreOnChoice: [
      {
        answer: true,
        score: 1,
      },
    ],
    questionOnAnswer: [
      {
        questionAnswer: false,
        id: 'QUESTION_INVESTMENT_TODAY',
        type: 'CHOICE',
        choices: [true, false],
        scoreOnChoice: [
          {
            answer: true,
            score: 1,
          },
          {
            answer: false,
            score: 0.5,
          },
        ],
      },
    ],
  },
  {
    id: 'QUESTION_THOUGHT_ABOUT_INVESTING_OUT_OF_USUAL_BANK',
    type: 'CHOICE',
    choices: ['LETS_DO_THIS', 'NEVER_DO_THIS'],
    scoreOnChoice: [
      {
        answer: 'LETS_DO_THIS',
        score: 1,
      },
      {
        answer: 'NEVER_DO_THIS',
        score: 0.5,
      },
    ],
  },
  {
    id: 'QUESTION_PREFER_SECURITY_OR_PROFIT',
    type: 'CHOICE',
    choices: ['SECURITY', 'PROFIT'],
    scoreOnChoice: [
      {
        answer: 'SECURITY',
        score: 1,
      },
      {
        answer: 'PROFIT',
        score: 1,
      },
    ],
  },
  {
    id: 'QUESTION_KNOW_THE_DIFFERENCE_BETWEEN_CDB_AND_CDI',
    type: 'CHOICE',
    choices: [true, false],
    scoreOnChoice: [
      {
        answer: true,
        score: 1,
      },
      {
        answer: false,
        score: 0.5,
      },
    ],
  },
]
