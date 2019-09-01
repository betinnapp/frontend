import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

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
const AnswerForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 45px;
  grid-column-gap: 8px;
  align-items: center;
  background: #fff;
  min-height: 70px;
  padding: 8px;
`

const answerAreaSchema = yup.object().shape({
  answer: yup.string().required(messages.required),
})

const formInitialValues = {
  answer: '',
}

export function AnswerArea({ question, answerQuestion }) {
  const { id, type, choices } = question

  const handleButtonAnswerType = answer => () => {
    answerQuestion(id, answer)
  }

  const renderForm = (inputType = 'text') => (
    <Formik
      validationSchema={answerAreaSchema}
      validateOnBlur={false}
      initialValues={formInitialValues}
      onSubmit={({ answer }, { resetForm }) => {
        answerQuestion(id, answer)
        resetForm()
      }}
    >
      <AnswerForm>
        <InputField
          type={inputType}
          id="answer"
          name="answer"
          label={messages.answer}
        />
        <button type="submit">Go</button>
      </AnswerForm>
    </Formik>
  )

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
    case 'PASSWORD':
    case 'PASSWORD_CONFIRMATION':
      return renderForm('password')
    case 'DATE':
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
