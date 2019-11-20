import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import Button from 'components/Button'
import RadioButtonGroup from 'components/RadioButtonGroup'

import messages from './messages'

const FormWrapper = styled(Form)`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex: auto;
  align-items: center;
`

const validationSchema = yup.object().shape({
  optionId: yup.string().required(messages.anOptionIsRequired),
})

function QuizContent({
  id,
  text,
  options = [],
  onSubmitQuiz,
  goToNextQuestion,
  isLastQuestion,
  correctOptionId,
  answeredOptionId,
}) {
  const [submitted, setSubmitted] = useState(false)

  const initialValues = {
    optionId: answeredOptionId || '',
  }

  useEffect(() => {
    setSubmitted(false)
  }, [id])

  const handleNextQuestionClick = () => {
    goToNextQuestion()
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      onSubmit={({ optionId }) => {
        onSubmitQuiz(id, optionId)
        setSubmitted(true)
      }}
      enableReinitialize
    >
      {({
        isSubmitting,
        errors,
        touched,
        resetForm,
      }) => (
        <FormWrapper>
          <RadioButtonGroup
            error={errors.optionId}
            touched={touched.optionId}
            options={options}
            label={text}
            name="optionId"
            submitted={submitted}
            correctOption={correctOptionId}
            disabled={isSubmitting || submitted || !!answeredOptionId}
          />
          {submitted || answeredOptionId ? (
            <Button
              id="nextQuestion"
              onClick={() => {
                handleNextQuestionClick()
                resetForm()
              }}
            >
              {isLastQuestion ? (
                <FormattedMessage {...messages.finishQuiz} />
              ) : (
                <FormattedMessage {...messages.nextQuestion} />
              )}
            </Button>
          ) : (
            <Button id="submitAnswer" type="submit" disabled={isSubmitting}>
              <FormattedMessage {...messages.confirmAnswer} />
            </Button>
          )}
        </FormWrapper>
      )}
    </Formik>
  )
}

QuizContent.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  options: PropTypes.array,
  onSubmitQuiz: PropTypes.func.isRequired,
  goToNextQuestion: PropTypes.func.isRequired,
  isLastQuestion: PropTypes.bool.isRequired,
  correctOptionId: PropTypes.string,
  answeredOptionId: PropTypes.string,
}

export default QuizContent
