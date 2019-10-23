import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from 'components/Button'
import InputField from 'components/InputField'

import messages from './messages'

const Choices = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`
const AnswerForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 45px;
  grid-column-gap: 8px;
  align-items: center;
  background: #fff;
  min-height: 70px;
  padding: 8px;
`

const SendButton = styled.button`
  font-size: 24px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  transition: 0.2s ease all;

  &:hover,
  &:active {
    transform: scale(1.1);
  }
`

const formInitialValues = {
  answer: '',
}

export function AnswerArea({ question, answerQuestion }) {
  const { id, type, choices } = question

  const handleButtonAnswerType = answer => () => buttonClick(answer)

  const buttonClick = useCallback(
    answer => {
      answerQuestion(id, answer)
    },
    [id],
  )

  const getValidationForFieldType = inputType => {
    switch (inputType) {
      case 'EMAIL':
      case 'DATE':
      case 'TEXT':
      default:
        return yup.string().required(messages.required)
    }
  }

  const renderForm = (inputType = 'text') => {
    const validationSchema = yup.object().shape({
      answer: getValidationForFieldType(inputType),
    })

    return (
      <Formik
        validationSchema={validationSchema}
        validateOnBlur={false}
        initialValues={formInitialValues}
        onSubmit={({ answer }, { resetForm }) => {
          resetForm()
          answerQuestion(id, answer)
        }}
      >
        <AnswerForm>
          <InputField
            type={inputType}
            id="answer"
            name="answer"
            label={messages.answer}
          />
          <SendButton type="submit">
            <FontAwesomeIcon icon="paper-plane" />
          </SendButton>
        </AnswerForm>
      </Formik>
    )
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
              <FormattedMessage {...messages[choice.toString()]} />
            </Button>
          ))}
        </Choices>
      )
    }
    case 'DATE':
      return renderForm('date')
    case 'EMAIL':
    case 'TEXT':
    default:
      return renderForm()
  }
}

AnswerArea.propTypes = {
  question: PropTypes.object.isRequired,
  answerQuestion: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(AnswerArea)
