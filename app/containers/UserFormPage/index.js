/**
 *
 * UserFormPage
 *
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { HOME_PATH } from 'containers/App/urls'
import Button from 'components/Button'
import ContentWithHeader from 'components/ContentWithHeader'
import InputField from 'components/InputField'
import Loader from 'components/Loader'
import SelectField from 'components/SelectField'
import Title from 'components/Title'

import {
  selectUserFormInitialValues,
  selectUserSaveIsLoading,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import { workOptions } from './constants'
import { saveUser } from './actions'

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 16px;

  > * {
    padding: 16px 0;
  }

  .footer {
    text-align: center;
  }
`

const userFormSchema = yup.object().shape({
  firstName: yup.string().required(messages.required),
  lastName: yup.string().required(messages.required),
  shortName: yup.string().required(messages.required),
  email: yup.string().required(messages.required),
  birthDate: yup.string().required(messages.required),
  work: yup.string().required(messages.required),
})

export function UserFormPage(props) {
  useInjectReducer({ key: 'userFormPage', reducer })
  useInjectSaga({ key: 'userFormPage', saga })

  const normalizedWorkOptions = workOptions.map(option => ({
    ...option,
    label: props.intl.formatMessage(option.label),
  }))

  return (
    <ContentWithHeader
      backTo={HOME_PATH}
      gridTemplateRows={['auto', 'auto', '1fr']}
    >
      <Title>
        <FormattedMessage {...messages.personalInformation} />
      </Title>
      <Formik
        initialValues={props.initialValues}
        validationSchema={userFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          props.saveUser(values)
          setSubmitting(false)
        }}
        enableReinitialize // Needed because user information may delay to load
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <div>
              <InputField
                type="text"
                id="firstName"
                name="firstName"
                label={messages.firstName}
              />
              <InputField
                type="text"
                id="lastName"
                name="lastName"
                label={messages.lastName}
              />
              <InputField
                type="text"
                id="shortName"
                name="shortName"
                label={messages.shortName}
              />
              <InputField
                type="date"
                id="birthDate"
                name="birthDate"
                label={messages.birthDate}
              />
              <InputField
                type="text"
                id="email"
                name="email"
                label={messages.email}
              />
              <SelectField
                id="work"
                name="work"
                label={messages.work}
                options={normalizedWorkOptions}
              />
            </div>

            <div className="footer">
              <Loader isLoading={props.isLoading}>
                <Button
                  type="submit"
                  id="save"
                  disabled={isSubmitting}
                  small
                >
                  <FormattedMessage {...messages.save} />
                </Button>
              </Loader>
            </div>
          </StyledForm>
        )}
      </Formik>
    </ContentWithHeader>
  )
}

UserFormPage.propTypes = {
  initialValues: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  saveUser: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  initialValues: selectUserFormInitialValues,
  isLoading: selectUserSaveIsLoading,
})

function mapDispatchToProps(dispatch) {
  return {
    saveUser: values => {
      dispatch(saveUser(values))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(
  injectIntl,
  withConnect,
)(UserFormPage)
