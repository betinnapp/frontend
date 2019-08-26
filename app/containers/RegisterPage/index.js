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
import { FormattedMessage } from 'react-intl'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import Icon from 'images/icon.svg'
import Button from 'components/Button'
import InputField from 'components/InputField'

import Header from './Header'
import makeSelectQuestions from './selectors'
import messages from './messages'
import reducer from './reducer'
import saga from './saga'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 8px;
  height: 100%;
`

const ActorIcon = styled.img`
  width: 36px;
`
const SystemIcon = styled(ActorIcon)`
  margin-right: 8px;
`
const UserIcon = styled(ActorIcon)`
  margin-left: 8px;
`

const Question = styled.div`
  max-width: 75%;
`
const Answer = styled.div`
  float: right;
  display: flex;
  align-items: center;
  max-width: 75%;
`

const AnswerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  > * {
    margin: 8px;
  }
`

export function RegisterPage(props) {
  useInjectReducer({ key: 'registerPage', reducer })
  useInjectSaga({ key: 'registerPage', saga })

  const renderQuestion = questionItem => (
    <div>
      <Question>
        <SystemIcon src={Icon} alt="Betinnapp icon" />
        <FormattedMessage {...messages[questionItem.question]} />
      </Question>
      {questionItem.answer && (
        <Answer>
          <span>{questionItem.answer}</span>
          <UserIcon src={Icon} alt="Betinnapp icon" />
        </Answer>
      )}
    </div>
  )

  const renderAnswerInput = questionItem => {
    const { question, answerType, answersChoice } = questionItem

    switch (answerType) {
      case 'CHOICE': {
        return (
          <AnswerInput>
            {answersChoice.map((choice, index) => (
              <Button
                key={choice}
                id={`choice-${index}`}
                secondary={index % 2 !== 0}
                onClick={() => {}}
              >
                <FormattedMessage {...messages[choice]} />
              </Button>
            ))}
          </AnswerInput>
        )
      }
      case 'DATE':
      case 'EMAIL':
      case 'TEXT':
      default:
        return (
          <AnswerInput>
            <InputField
              type="text"
              id={question}
              name={question}
              label={messages.answer}
            />
          </AnswerInput>
        )
    }
  }

  return (
    <Wrapper>
      <Header />
      {renderQuestion(props.questions.QUESTION_NAME)}
      {renderAnswerInput(props.questions.QUESTION_NAME)}
    </Wrapper>
  )
}

RegisterPage.propTypes = {
  questions: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  questions: makeSelectQuestions(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(RegisterPage)
