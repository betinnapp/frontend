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
      console.log(questions)
      return questions
    },
  )

export {
  makeSelectQuestions,
  makeSelectQuestionBeingAnswered,
  makeSelectAnswers,
}
