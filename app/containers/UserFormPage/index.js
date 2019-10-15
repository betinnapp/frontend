/**
 *
 * UserFormPage
 *
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import Button from 'components/Button'
import ContentWrapper from 'components/ContentWrapper'
import InputField from 'components/InputField'
import Title from 'components/Title'

import makeSelectUserFormPage from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  > * {
    padding: 16px 0;
  }
`

const userFormSchema = yup.object().shape({
  fullname: yup.string().required(messages.required),
  email: yup.string().required(messages.required),
  birthDate: yup.string().required(messages.required),
  work: yup.string().required(messages.required),
})

const initialValues = {
  fullname: '',
  email: '',
  birthDate: '',
  work: '',
}

export function UserFormPage() {
  useInjectReducer({ key: 'userFormPage', reducer })
  useInjectSaga({ key: 'userFormPage', saga })

  return (
    <ContentWrapper
      fullHeight
      grid
      gridTemplateRows={['auto', '1fr']}
    >
      <Title>
        <FormattedMessage {...messages.personalInformation} />
      </Title>
      <Formik
        initialValues={initialValues} // TODO: use information from user /me response
        validationSchema={userFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          // console.log(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <div>
              <InputField
                type="text"
                id="fullname"
                name="fullname"
                label={messages.fullName}
              />
              <InputField
                type="text"
                id="email"
                name="email"
                label={messages.email}
              />
              <InputField
                type="text"
                id="birthDate"
                name="birthDate"
                label={messages.birthDate}
              />
              <InputField
                type="text"
                id="work"
                name="work"
                label={messages.work}
              />
            </div>

            <div>
              <Button
                type="submit"
                id="save"
                disabled={isSubmitting}
                small
              >
                <FormattedMessage {...messages.save} />
              </Button>
            </div>
          </StyledForm>
        )}
      </Formik>
    </ContentWrapper>
  )
}

UserFormPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  userFormPage: makeSelectUserFormPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(UserFormPage)
