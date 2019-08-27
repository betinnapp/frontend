import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Icon from 'images/icon.svg'

import messages from './messages'

const Wrapper = styled.div`
  overflow: hidden;
`
const QuestionWrapper = styled.div`
  max-width: 75%;
`
const Answer = styled.div`
  float: right;
  display: flex;
  align-items: center;
  max-width: 75%;
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

export default function Question({ answer, choices, id, type }) {
  const renderAnswer = () => {
    if (answer && (type === 'PASSWORD' || type === 'PASSWORD_CONFIRMATION')) {
      return null
    }

    return (
      answer && (
        <Answer>
          {choices ? (
            <FormattedMessage {...messages[answer]} />
          ) : (
            <span>{answer}</span>
          )}
          <UserIcon src={Icon} alt="Betinnapp icon" />
        </Answer>
      )
    )
  }

  return (
    <Wrapper>
      <QuestionWrapper>
        <SystemIcon src={Icon} alt="Betinnapp icon" />
        <FormattedMessage {...messages[id]} />
      </QuestionWrapper>
      {renderAnswer()}
    </Wrapper>
  )
}

Question.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  choices: PropTypes.array,
  answer: PropTypes.string,
}
