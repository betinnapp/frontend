import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { FormattedMessage } from 'react-intl'

import Button from 'components/Button'
import RadioButtonGroup from 'components/RadioButtonGroup'

import messages from './messages'

const validationSchema = yup.object().shape({
  radioGroup: yup.string().required(messages.anOptionIsRequired),
})

const initialValues = {
  radioGroup: ''
}

function QuizContent({ text, options = [] }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      onSubmit={({ answer }, { resetForm }) => {
        resetForm()
        console.log('submit: ', answer)
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <RadioButtonGroup
            error={errors.radioGroup}
            touched={touched.radioGroup}
            options={options}
            label={text}
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
}

export default QuizContent
