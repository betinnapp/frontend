/*
 *
 * RegisterPage constants
 *
 */

export const ANSWER_QUESTION = 'app/RegisterPage/ANSWER_QUESTION'
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
    id: 'QUESTION_AGE',
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
    questionOnAnswer: [
      {
        answer: true,
        id: 'QUESTION_MONTHLY_INCOME',
        type: 'TEXT',
      },
    ],
  },
  {
    id: 'QUESTION_INVESTIMENT_TODAY',
    type: 'CHOICE',
    choices: [true, false],
    scoreOnChoice: [
      {
        answer: true,
        score: 2,
      },
    ],
    questionOnAnswer: [
      {
        answer: false,
        id: 'QUESTION_ALREADY_INVESTED',
        type: 'CHOICE',
        choices: [true, false],
        scoreOnChoice: [
          {
            answer: true,
            score: 1,
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
    ],
  },
  {
    id: 'QUESTION_PASSWORD',
    fieldPath: 'password',
    type: 'PASSWORD',
  },
  {
    id: 'QUESTION_PASSWORD_CONFIRMATION',
    type: 'PASSWORD_CONFIRMATION',
  },
]
