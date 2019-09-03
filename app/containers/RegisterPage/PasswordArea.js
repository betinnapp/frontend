import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import Button from 'components/Button'
import InputField from 'components/InputField'
import Text from 'components/Text'

import messages from './messages'

const StyledForm = styled(Form)`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  grid-template-columns: min-content;
`

const validationSchema = yup.object().shape({
  password: yup.string().required(messages.required),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], messages.passwordsDoNotMatch)
    .required(messages.required),
})

const formInitialValues = {
  password: '',
  confirmPassword: '',
}

export function PasswordArea({ submitRegister }) {
  return (
    <Formik
      validationSchema={validationSchema}
      validateOnBlur={false}
      initialValues={formInitialValues}
      onSubmit={(values, { setSubmitting }) => {
        submitRegister(values.password)
        setSubmitting(false)
      }}
    >
      <StyledForm>
        <div>
          <Text big bold terciary>
            <FormattedMessage {...messages.weAreAlmostFinishing} />
          </Text>
          <Text semiBold>
            <FormattedMessage {...messages.pleaseInformYourPasswordToFinish} />
          </Text>
        </div>
        <InputField
          type="password"
          id="password"
          name="password"
          label={messages.password}
        />
        <InputField
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          label={messages.confirmPassword}
        />
        <Button type="submit" id="createAccount">
          <FormattedMessage {...messages.createAccount} />
        </Button>
      </StyledForm>
    </Formik>
  )
}

PasswordArea.propTypes = {
  intl: intlShape.isRequired,
  submitRegister: PropTypes.func.isRequired,
}

export default injectIntl(PasswordArea)
