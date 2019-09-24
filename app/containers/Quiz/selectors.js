import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectQuizDomain = state => state.quiz || initialState

const selectQuizContent = createSelector(
  selectQuizDomain,
  substate => substate.quizContent,
)

export {
  selectQuizDomain,
  selectQuizContent,
}
