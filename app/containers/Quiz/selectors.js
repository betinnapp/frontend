import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectQuizDomain = state => state.quiz || initialState

const selectQuizIsLoading = createSelector(
  selectQuizDomain,
  substate => substate.isLoading,
)

const selectQuizQuestion = createSelector(
  selectQuizDomain,
  substate => substate.visibleQuestion
)

const selectIsLastQuestion = createSelector(
  selectQuizDomain,
  selectQuizQuestion,
  (substate, quizQuestion) => {
    const { questions } = substate
    return quizQuestion ? questions[questions.length - 1].id === quizQuestion.id : false
  }
)

const selectAnswers = createSelector(
  selectQuizDomain,
  substate => substate.answers
)

export {
  selectQuizDomain,
  selectQuizIsLoading,
  selectQuizQuestion,
  selectIsLastQuestion,
  selectAnswers,
}
