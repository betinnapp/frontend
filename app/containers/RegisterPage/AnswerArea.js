import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Button from 'components/Button'
import InputField from 'components/InputField'

import messages from './messages'

const Choices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  > * {
    margin: 8px;
  }
`
const AnswerInput = styled.div`
  display: grid;
  grid-template-columns: 1fr 45px;
  grid-column-gap: 8px;
  align-items: center;
  background: #fff;
  height: 70px;
  padding: 8px;
`

export default function AnswerArea({ question, answerQuestion }) {
  const { id, type, choices } = question

  const handleButtonAnswerType = answer => () => {
    answerQuestion(id, answer)
  }

  switch (type) {
    case 'CHOICE': {
      return (
        <Choices>
          {choices.map((choice, index) => (
            <Button
              key={choice}
              id={`choice-${index}`}
              secondary={index % 2 !== 0}
              onClick={handleButtonAnswerType(choice)}
            >
              <FormattedMessage {...messages[choice]} />
            </Button>
          ))}
        </Choices>
      )
    }
    case 'DATE':
    case 'EMAIL':
    case 'TEXT':
    default:
      return (
        <AnswerInput>
          <InputField type="text" id={id} name={id} label={messages.answer} />
        </AnswerInput>
      )
  }
}

AnswerArea.propTypes = {
  question: PropTypes.object.isRequired,
  answerQuestion: PropTypes.func.isRequired,
}
