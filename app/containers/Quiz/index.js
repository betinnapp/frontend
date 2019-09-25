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

import { fetchQuiz, answerQuiz } from './actions'
import { selectQuizContent, selectQuizIsLoading } from './selectors'
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
    quiz,
    isLoading,
    history,
    onSubmitQuiz,
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
        {quiz.questions && (
          <QuizContent
            {...quiz.questions[0]}
            onSubmitQuiz={onSubmitQuiz}
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
  quiz: PropTypes.object,
  isLoading: PropTypes.bool,
  onSubmitQuiz: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  quiz: selectQuizContent,
  isLoading: selectQuizIsLoading,
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
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(Quiz)
