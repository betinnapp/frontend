/**
 *
 * RegisterPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import {
  makeSelectQuestions,
  makeSelectQuestionBeingAnswered,
} from './selectors'
import AnswerArea from './AnswerArea'
import Header from './Header'
import Question from './Question'
import reducer from './reducer'
import saga from './saga'
import { answerQuestion } from './actions'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 8px;
  height: 100%;
`

export function RegisterPage(props) {
  useInjectReducer({ key: 'registerPage', reducer })
  useInjectSaga({ key: 'registerPage', saga })

  const { questions } = props

  const renderQuestions = () => {
    const content = []

    questions.every(question => {
      content.push(<Question key={question.id} {...question} />)
      if (question.waitingAnswer) {
        return false
      }
      return true
    })

    return <div>{content}</div>
  }

  return (
    <Wrapper>
      <Header />
      {renderQuestions()}
      <AnswerArea
        question={props.questionBeingAnswered}
        answerQuestion={props.answerQuestion}
      />
    </Wrapper>
  )
}

RegisterPage.propTypes = {
  questions: PropTypes.array,
  questionBeingAnswered: PropTypes.object,
  answerQuestion: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  questions: makeSelectQuestions(),
  questionBeingAnswered: makeSelectQuestionBeingAnswered(),
})

function mapDispatchToProps(dispatch) {
  return {
    answerQuestion: (id, answer) => {
      dispatch(answerQuestion(id, answer))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(RegisterPage)
