/**
 *
 * LoginPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import Button from 'components/Button'
import InputField from 'components/InputField'
import Link from 'components/Link'
import Text from 'components/Text'
import Slogan from 'components/Slogan'

import { Formik, Form } from 'formik'
import { login } from './actions'
import makeSelectLoginPage from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

const StyledForm = styled(Form)`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export function LoginPage(props) {
  useInjectReducer({ key: 'loginPage', reducer })
  useInjectSaga({ key: 'loginPage', saga })

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validate={values => {
        const errors = {}
        Object.keys(values).forEach(value => {
          if (!values[value]) {
            errors[value] = <FormattedMessage {...messages.required} />
          }
        })

        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.submitLogin(values)
        setSubmitting(false)
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <StyledForm>
          <Slogan big />
          <div>
            <Text bold big>
              <FormattedMessage {...messages.welcome} />
            </Text>
            <Text semiBold secondary>
              <FormattedMessage {...messages.weHaveALotToLearn} />
            </Text>
          </div>
          <InputField
            type="text"
            id="username"
            name="username"
            label={messages.user}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            error={touched.username && errors.username}
          />
          <InputField
            type="password"
            id="password"
            name="password"
            label={messages.password}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password}
          />
          <Link id="forgotPassword" to="/forgotPassword" bold small>
            <FormattedMessage {...messages.forgotPassword} />
          </Link>
          <Button id="beginSession" type="submit" disabled={isSubmitting}>
            <FormattedMessage {...messages.beginSession} />
          </Button>
        </StyledForm>
      )}
    </Formik>
  )
}

LoginPage.propTypes = {
  submitLogin: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    submitLogin: values => {
      dispatch(login(values))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(LoginPage)
