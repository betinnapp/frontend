/*
 *
 * RegisterPage constants
 *
 */

export const ANSWER_QUESTION = 'app/RegisterPage/ANSWER_QUESTION'

export const REGISTER_QUESTIONS = [
  {
    id: 'QUESTION_NAME',
    type: 'CHOICE',
    choices: ['YES', 'NO'],
    waitingAnswer: true,
  },
  {
    id: 'QUESTION_SHORTNAME',
    type: 'TEXT',
  },
  {
    id: 'QUESTION_AGE',
    type: 'DATE',
  },
  {
    id: 'QUESTION_EMAIL',
    type: 'EMAIL',
  },
  {
    id: 'QUESTION_WORK',
    type: 'CHOICE',
    choices: ['YES', 'NO'],
    questionOnAnswer: [
      {
        answer: 'YES',
        id: 'QUESTION_MONTHLY_INCOME',
        type: 'TEXT',
      },
    ],
  },
  {
    id: 'QUESTION_INVESTIMENT_TODAY',
    type: 'CHOICE',
    choices: ['YES', 'NO'],
    scoreOnChoice: [
      {
        answer: 'YES',
        score: 2,
      },
    ],
    questionOnAnswer: [
      {
        answer: 'NO',
        id: 'QUESTION_ALREADY_INVESTED',
        type: 'CHOICE',
        choices: ['YES', 'NO'],
        scoreOnChoice: [
          {
            answer: 'YES',
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
]
