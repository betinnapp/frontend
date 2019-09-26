import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { success } from 'react-notification-system-redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { selectSelectedId } from 'containers/App/selectors'
import { SUBMODULE_DETAILS_PATH } from 'containers/App/urls'
import { selectSubmoduleContent } from 'containers/SubmoduleContent/selectors'
import Loader from 'components/Loader'

import { fetchQuiz, answerQuiz, setNextQuestionAsVisible } from './actions'
import { selectQuizIsLoading, selectQuizQuestion } from './selectors'
import reducer from './reducer'
import saga from './saga'
import QuizContent from './QuizContent'
import messages from './messages'

export function Quiz(props) {
  useInjectReducer({ key: 'quiz', reducer })
  useInjectSaga({ key: 'quiz', saga })

  const {
    quizId,
    submodule,
    question,
    isLoading,
    history,
    onSubmitQuiz,
    goToNextQuestion,
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

      history.replace(url)
    }
  }, [])

  return (
    <div>
      <Loader isLoading={isLoading}>
        {submodule.name}
        {question && (
          <QuizContent
            {...question}
            onSubmitQuiz={onSubmitQuiz}
            goToNextQuestion={goToNextQuestion}
          />
        )}
      </Loader>
    </div>
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
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectQuizIsLoading,
  question: selectQuizQuestion,
  quizId: selectSelectedId('quizId'),
  submodule: selectSubmoduleContent,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchQuiz: (quizId) => {
      dispatch(fetchQuiz(quizId))
    },
    onSubmitQuiz: (questionId, optionId) => {
      dispatch(answerQuiz(questionId, optionId))
      dispatch(success({ message: messages.answerSavedSuccessfully, autoDismiss: 5000 }))
    },
    goToNextQuestion: () => {
      dispatch(setNextQuestionAsVisible())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(Quiz)
