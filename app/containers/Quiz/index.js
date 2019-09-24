import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { selectSelectedId } from 'containers/App/selectors'
import { SUBMODULE_DETAILS_PATH } from 'containers/App/urls'
import { selectSubmoduleContent } from 'containers/SubmoduleContent/selectors'

import { fetchQuiz } from './actions'
import { selectQuizContent } from './selectors'
import reducer from './reducer'
import saga from './saga'

export function Quiz(props) {
  useInjectReducer({ key: 'quiz', reducer })
  useInjectSaga({ key: 'quiz', saga })

  useEffect(() => {
    const {
      quizId,
      history,
      match: {
        params: { moduleId, submoduleId },
      },
    } = props

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
      {props.submodule.name}
    </div>
  )
}

Quiz.propTypes = {
  fetchQuiz: PropTypes.func,
  submodule: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  quiz: selectQuizContent,
  quizId: selectSelectedId('quizId'),
  submodule: selectSubmoduleContent,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchQuiz: (quizId) => {
      dispatch(fetchQuiz(quizId))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(Quiz)
