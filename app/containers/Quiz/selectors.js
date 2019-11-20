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

const selectQuestions = createSelector(
  selectQuizDomain,
  substate => substate.questions || []
)

const selectIsLastQuestion = createSelector(
  selectQuestions,
  selectQuizQuestion,
  (questions, quizQuestion) => quizQuestion ? questions[questions.length - 1].id === quizQuestion.id : false
)

const selectAnswers = createSelector(
  selectQuizDomain,
  substate => substate.answers
)

const selectCorrectAnswersCount = createSelector(
  selectAnswers,
  selectQuestions,
  (answers, questions) => {
    let count = 0

    questions.forEach(({ id, correctOptionId, answeredOptionId }) => {
      if (
        answers[id] === correctOptionId ||
        answeredOptionId === correctOptionId
      ) {
        count += 1
      }
    })

    return count
  }
)

export {
  selectQuizDomain,
  selectQuizIsLoading,
  selectQuizQuestion,
  selectIsLastQuestion,
  selectAnswers,
  selectQuestions,
  selectCorrectAnswersCount,
}
