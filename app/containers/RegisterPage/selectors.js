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
    questions => questions.find(question => question.waitingAnswer),
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
      let score = 0

      questions.forEach(question => {
        const { answer, scoreOnChoice = [] } = question

        const scoreObj = scoreOnChoice.find(option => option.answer === answer)
        if (scoreObj) {
          score += scoreObj.score
        }
      })

      return score
    },
  )

export {
  makeSelectQuestions,
  makeSelectQuestionBeingAnswered,
  makeSelectAnswers,
  makeSelectScore,
}
