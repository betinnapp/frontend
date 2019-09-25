import React from 'react'
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
  optionId: ''
}

function QuizContent({ text, options = [], onSubmitQuiz }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      onSubmit={({ optionId }, { resetForm }) => {
        resetForm()
        onSubmitQuiz(optionId)
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <RadioButtonGroup
            error={errors.optionId}
            touched={touched.optionId}
            options={options}
            label={text}
            name="optionId"
          />
          <Button id="submitAnswer" type="submit" disabled={isSubmitting}>
            <FormattedMessage {...messages.confirmAnswer} />
          </Button>
        </Form>
      )}
    </Formik>
  )
}

QuizContent.propTypes = {
  text: PropTypes.string,
  options: PropTypes.array,
  onSubmitQuiz: PropTypes.func.isRequired,
}

export default QuizContent
