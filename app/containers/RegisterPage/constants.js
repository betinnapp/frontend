/*
 *
 * RegisterPage constants
 *
 */

export const ANSWER_QUESTION = 'app/RegisterPage/ANSWER_QUESTION'

export const REGISTER_QUESTIONS = {
  QUESTION_NAME: {
    question: 'QUESTION_NAME',
    answerType: 'TEXT',
    answersChoice: ['YES', 'NO'],
  },
  QUESTION_SHORTNAME: {
    question: 'QUESTION_SHORTNAME',
    answerType: 'TEXT',
  },
  QUESTION_AGE: {
    question: 'QUESTION_AGE',
    answerType: 'DATE',
  },
  QUESTION_EMAIL: {
    question: 'QUESTION_EMAIL',
    answerType: 'EMAIL',
  },
  QUESTION_WORK: {
    question: 'QUESTION_WORK',
    answerType: 'CHOICE',
    answersChoice: ['YES', 'NO'],
    questionOnAnswer: {
      YES: {
        answer: 'YES',
        question: 'QUESTION_MONTHLY_INCOME',
        answerType: 'TEXT',
      },
    },
  },
  QUESTION_INVESTIMENT_TODAY: {
    question: 'QUESTION_INVESTIMENT_TODAY',
    answerType: 'CHOICE',
    answersChoice: ['YES', 'NO'],
    scoreOnAnswerChoice: {
      answer: 'YES',
      score: 2,
    },
    questionOnAnswer: {
      NO: {
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
    },
  },
  QUESTION_THOUGHT_ABOUT_INVESTING_OUT_OF_USUAL_BANK: {
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
}
