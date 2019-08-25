/*
 *
 * RegisterPage constants
 *
 */

export const DEFAULT_ACTION = 'app/RegisterPage/DEFAULT_ACTION'

export const REGISTER_QUESTIONS = [
  {
    question: 'QUESTION_NAME',
    answerType: 'TEXT_DATE',
  },
  {
    question: 'QUESTION_SHORTNAME',
    answerType: 'TEXT',
  },
  {
    question: 'QUESTION_AGE',
    answerType: 'DATE',
  },
  {
    question: 'QUESTION_EMAIL',
    answerType: 'EMAIL',
  },
  {
    question: 'QUESTION_WORK',
    answerType: 'CHOICE',
    answersChoice: ['YES', 'NO'],
    questionOnAnswer: [
      {
        answer: 'YES',
        question: 'QUESTION_MONTHLY_INCOME',
        answerType: 'TEXT',
      },
    ],
  },
  {
    question: 'QUESTION_INVESTIMENT_TODAY',
    answerType: 'CHOICE',
    answersChoice: ['YES', 'NO'],
    scoreOnAnswerChoice: {
      answer: 'YES',
      score: 2,
    },
    questionOnAnswer: [
      {
        answer: 'NO',
        question: 'QUESTION_ALREADY_INVESTED',
        answerType: 'CHOICE',
        answersChoice: ['YES', 'NO'],
        scoreOnAnswerChoice: [
          {
            answer: 'YES',
            score: 1,
          },
        ],
      },
    ],
  },
  {
    question: 'QUESTION_THOUGHT_ABOUT_INVESTING_OUT_OF_USUAL_BANK',
    answerType: 'CHOICE',
    answersChoice: ['LETS_DO_THIS', 'NEVER_DO_THIS'],
    scoreOnAnswerChoice: [
      {
        answer: 'LETS_DO_THIS',
        score: 1,
      },
    ],
  },
]
