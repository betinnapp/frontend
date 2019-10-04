import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { success } from 'react-notification-system-redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { selectSelectedId } from 'containers/App/selectors'
import { deleteSelectedId } from 'containers/App/actions'
import { HOME_PATH, SUBMODULE_DETAILS_PATH } from 'containers/App/urls'
import { selectSubmoduleContent } from 'containers/SubmoduleContent/selectors'
import ContentWithBanner from 'components/ContentWithBanner'
import Text from 'components/Text'

import {
  fetchQuiz,
  answerQuiz,
  setNextQuestionAsVisible,
  completeSubmodule,
} from './actions'
import {
  selectCorrectAnswersCount,
  selectIsLastQuestion,
  selectQuestions,
  selectQuizIsLoading,
  selectQuizQuestion,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import QuizContent from './QuizContent'
import QuizResult from './QuizResult'
import messages from './messages'

export function Quiz(props) {
  useInjectReducer({ key: 'quiz', reducer })
  useInjectSaga({ key: 'quiz', saga })

  const {
    quizId,
    submodule,
    question,
    match: {
      params: { moduleId, submoduleId },
    },
  } = props

  useEffect(() => {
    if (quizId) {
      props.fetchQuiz(quizId)
    } else {
      const url = SUBMODULE_DETAILS_PATH
        .replace(':moduleId', moduleId)
        .replace(':submoduleId', submoduleId)

      props.history.replace(url)
    }

    return function cleanup() {
      props.deleteQuizIdFromStore()
    }
  }, [])

  const completeSubmoduleHandler = () => {
    props.completeSubmodule(moduleId, submoduleId)
  }

  return (
    <ContentWithBanner
      isLoading={props.isLoading}
      image={submodule.image}
      miniBanner
    >
      <Text huge bold>
        {submodule.name}
      </Text>
      {question ? (
        <QuizContent
          {...question}
          onSubmitQuiz={props.onSubmitQuiz}
          goToNextQuestion={props.goToNextQuestion}
          isLastQuestion={props.isLastQuestion}
        />
      ) : (
        <QuizResult
          correctAnswersCount={props.correctAnswersCount}
          questionsCount={props.questions.length}
          completeSubmodule={completeSubmoduleHandler}
        />
      )}
    </ContentWithBanner>
  )
}

Quiz.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  fetchQuiz: PropTypes.func,
  submodule: PropTypes.object,
  quizId: PropTypes.string,
  isLoading: PropTypes.bool,
  onSubmitQuiz: PropTypes.func,
  goToNextQuestion: PropTypes.func,
  question: PropTypes.object,
  isLastQuestion: PropTypes.bool,
  deleteQuizIdFromStore: PropTypes.func,
  correctAnswersCount: PropTypes.number,
  questions: PropTypes.array,
  completeSubmodule: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectQuizIsLoading,
  question: selectQuizQuestion,
  isLastQuestion: selectIsLastQuestion,
  quizId: selectSelectedId('quizId'),
  submodule: selectSubmoduleContent,
  correctAnswersCount: selectCorrectAnswersCount,
  questions: selectQuestions,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchQuiz: quizId => {
      dispatch(fetchQuiz(quizId))
    },
    onSubmitQuiz: (questionId, optionId) => {
      dispatch(answerQuiz(questionId, optionId))
      dispatch(success({ message: messages.answerSavedSuccessfully, autoDismiss: 5000 }))
    },
    goToNextQuestion: () => {
      dispatch(setNextQuestionAsVisible())
    },
    deleteQuizIdFromStore: () => {
      dispatch(deleteSelectedId('quizId'))
    },
    completeSubmodule: (moduleId, submoduleId) => {
      dispatch(completeSubmodule(moduleId, submoduleId, HOME_PATH))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(Quiz)
