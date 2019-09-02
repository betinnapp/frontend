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
  makeSelectFinishedQuestions,
} from './selectors'
import AnswerArea from './AnswerArea'
import Header from './Header'
import PasswordArea from './PasswordArea'
import Question from './Question'
import reducer from './reducer'
import saga from './saga'
import { answerQuestion, finishQuestions, submitRegister } from './actions'
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
      const { answer, questionOnAnswer } = question
      const normalizedAnswer = answer !== undefined ? answer.toString() : answer

      content.push(
        <Question key={question.id} {...question} answer={normalizedAnswer} />,
      )

      if (question.waitingAnswer) {
        return false
      }

      if (questionOnAnswer) {
        const subQuestion = questionOnAnswer.find(
          subQtn => subQtn.waitingAnswer || subQtn.answer !== undefined,
        )

        if (subQuestion) {
          const { answer: subAnswer } = subQuestion
          const subNormalizedAnswer =
            subAnswer !== undefined ? subAnswer.toString() : subAnswer

          content.push(
            <Question
              key={subQuestion.id}
              {...subQuestion}
              answer={subNormalizedAnswer}
            />,
          )

          if (subQuestion.waitingAnswer) {
            return false
          }
        }
      }

      return true
    })

    return <QuestionWrapper>{content}</QuestionWrapper>
  }

  return (
    <Wrapper>
      <Header />
      {!props.finishedQuestions && renderQuestions()}
      {props.questionBeingAnswered && (
        <AnswerArea
          question={props.questionBeingAnswered}
          answerQuestion={props.answerQuestion}
        />
      )}
      {!props.questionBeingAnswered && !props.finishedQuestions && (
        <SubmitWrapper className="bt-text-align-center">
          <Button id="finishRegister" onClick={props.finishQuestions}>
            <FormattedMessage {...messages.finishRegister} />
          </Button>
        </SubmitWrapper>
      )}
      {props.finishedQuestions && (
        <PasswordArea submitRegister={props.submitRegister} />
      )}
    </Wrapper>
  )
}

RegisterPage.propTypes = {
  questions: PropTypes.array,
  questionBeingAnswered: PropTypes.object,
  finishedQuestions: PropTypes.bool,
  answerQuestion: PropTypes.func,
  submitRegister: PropTypes.func,
  finishQuestions: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  questions: makeSelectQuestions(),
  questionBeingAnswered: makeSelectQuestionBeingAnswered(),
  finishedQuestions: makeSelectFinishedQuestions(),
})

function mapDispatchToProps(dispatch) {
  return {
    answerQuestion: (id, answer) => {
      dispatch(answerQuestion(id, answer))
    },
    submitRegister: () => {
      dispatch(submitRegister())
    },
    finishQuestions: () => {
      dispatch(finishQuestions())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(RegisterPage)
