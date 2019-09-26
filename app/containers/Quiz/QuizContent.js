import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { FormattedMessage } from 'react-intl'

import Button from 'components/Button'
import RadioButtonGroup from 'components/RadioButtonGroup'

import messages from './messages'

const validationSchema = yup.object().shape({
  optionId: yup.string().required(messages.anOptionIsRequired),
})

const initialValues = {
  optionId: '',
}

function QuizContent({
  id,
  text,
  options = [],
  onSubmitQuiz,
  goToNextQuestion,
}) {
  const [submitted, setSubmitted] = useState(false)
  const correctOptionId = options.find(option => option.isCorrectAnswer).id

  useEffect(() => {
    setSubmitted(false)
  }, [id])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      onSubmit={({ optionId }) => {
        onSubmitQuiz(id, optionId)
        setSubmitted(true)
      }}
    >
      {({
        isSubmitting,
        errors,
        touched,
        resetForm,
      }) => (
        <Form>
          <RadioButtonGroup
            error={errors.optionId}
            touched={touched.optionId}
            options={options}
            label={text}
            name="optionId"
            submitted={submitted}
            correctOption={correctOptionId}
            disabled={isSubmitting || submitted}
          />
          {submitted ? (
            <Button
              id="nextQuestion"
              onClick={() => {
                goToNextQuestion()
                resetForm()
              }}
            >
              <FormattedMessage {...messages.nextQuestion} />
            </Button>
          ) : (
            <Button id="submitAnswer" type="submit" disabled={isSubmitting}>
              <FormattedMessage {...messages.confirmAnswer} />
            </Button>
          )}
        </Form>
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
}

export default QuizContent
