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

import { FormattedMessage } from 'react-intl'
import {
  fetchQuiz,
  answerQuiz,
  setNextQuestionAsVisible,
  sendAnswers,
} from './actions'
import { selectQuizIsLoading, selectQuizQuestion, selectIsLastQuestion } from './selectors'
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
  }, [])

  return (
    <div>
      <Loader isLoading={props.isLoading}>
        {submodule.name}
        {question ? (
          <QuizContent
            {...question}
            onSubmitQuiz={props.onSubmitQuiz}
            goToNextQuestion={props.goToNextQuestion}
            isLastQuestion={props.isLastQuestion}
            sendQuizAnswers={props.sendQuizAnswers}
          />
        ) : (
          <div>
            <FormattedMessage {...messages.submoduleFinished} />
          </div>
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
  sendQuizAnswers: PropTypes.func,
  question: PropTypes.object,
  isLastQuestion: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectQuizIsLoading,
  question: selectQuizQuestion,
  isLastQuestion: selectIsLastQuestion,
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
    sendQuizAnswers: () => {
      dispatch(sendAnswers())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(Quiz)
