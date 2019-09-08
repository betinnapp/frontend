import { createSelector } from 'reselect'
import { initialState } from './reducer'

/**
 * Direct selector to the registerPage state domain
 */
const selectRegisterPageDomain = state => state.registerPage || initialState

const makeSelectQuestions = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.questions,
  )

const makeSelectQuestionBeingAnswered = () =>
  createSelector(
    makeSelectQuestions(),
    questions => {
      let found

      questions.every(question => {
        found = question.waitingAnswer ? question : undefined

        if (found) {
          return false
        }

        found = (question.questionOnAnswer || []).find(
          subQuestion => subQuestion.waitingAnswer,
        )

        if (found) {
          return false
        }

        return true
      })

      return found
    },
  )

const makeSelectAnswers = () =>
  createSelector(
    makeSelectQuestions(),
    questions => {
      const questionsObject = {}

      questions.forEach(question => {
        const { fieldPath } = question

        if (fieldPath) {
          questionsObject[fieldPath] = question.answer
        }
      })

      return questionsObject
    },
  )

const makeSelectScore = () =>
  createSelector(
    makeSelectQuestions(),
    questions => {
      const countScore = (score, question) => {
        const { answer, scoreOnChoice = [], questionOnAnswer = [] } = question
        const scoreObj = scoreOnChoice.find(option => option.answer === answer)

        const subScore = questionOnAnswer.reduce(countScore, 0)

        if (scoreObj) {
          return score + scoreObj.score + subScore
        }

        return score + subScore
      }

      return questions.reduce(countScore, 0)
    },
  )

const makeSelectFinishedQuestions = () =>
  createSelector(
    selectRegisterPageDomain,
    substate => substate.finishedQuestions,
  )

export {
  makeSelectQuestions,
  makeSelectQuestionBeingAnswered,
  makeSelectAnswers,
  makeSelectScore,
  makeSelectFinishedQuestions,
}
