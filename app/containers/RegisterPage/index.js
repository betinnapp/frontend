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

import Button from 'components/Button'

import { FormattedMessage } from 'react-intl'
import {
  makeSelectQuestions,
  makeSelectQuestionBeingAnswered,
} from './selectors'
import AnswerArea from './AnswerArea'
import Header from './Header'
import Question from './Question'
import reducer from './reducer'
import saga from './saga'
import { answerQuestion, submitRegister } from './actions'
import messages from './messages'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 8px;
  height: 100%;
  margin: auto -16px;
`
const QuestionWrapper = styled.div`
  overflow-y: auto;
  padding: 0 16px;
`
const SubmitWrapper = styled.div`
  margin-bottom: 8px;
`

export function RegisterPage(props) {
  useInjectReducer({ key: 'registerPage', reducer })
  useInjectSaga({ key: 'registerPage', saga })

  const { questions } = props

  const renderQuestions = () => {
    const content = []

    questions.every(question => {
      const { answer } = question
      const normalizedAnswer = answer !== undefined ? answer.toString() : answer

      content.push(
        <Question key={question.id} {...question} answer={normalizedAnswer} />,
      )

      if (question.waitingAnswer) {
        return false
      }

      return true
    })

    return <QuestionWrapper>{content}</QuestionWrapper>
  }

  return (
    <Wrapper>
      <Header />
      {renderQuestions()}
      {props.questionBeingAnswered && (
        <AnswerArea
          question={props.questionBeingAnswered}
          answerQuestion={props.answerQuestion}
        />
      )}
      {!props.questionBeingAnswered && (
        <SubmitWrapper className="bt-text-align-center">
          <Button id="createAccount" onClick={props.submitRegister}>
            <FormattedMessage {...messages.createAccount} />
          </Button>
        </SubmitWrapper>
      )}
    </Wrapper>
  )
}

RegisterPage.propTypes = {
  questions: PropTypes.array,
  questionBeingAnswered: PropTypes.object,
  answerQuestion: PropTypes.func,
  submitRegister: PropTypes.func,
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
    submitRegister: () => {
      dispatch(submitRegister())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(RegisterPage)
