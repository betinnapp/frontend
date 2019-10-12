import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'

import Button from 'components/Button'
import CurrencyField from 'components/CurrencyField'
import Loader from 'components/Loader'

import InvestmentPreview from './InvestmentPreview'
import messages from './messages'

const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 24px;
  max-width: 980px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .alignCenter {
    text-align: center;
  }
`

const initialValues = {
  currentDeposit: '',
}

const goalFormShape = yup.object().shape({
  currentDeposit: yup.number().required(messages.required),
})

function GoalDetailsForm(props) {
  const { goal, isLoading } = props

  return (
    <Loader isLoading={isLoading}>
      <Formik
        initialValues={initialValues}
        validationSchema={goalFormShape}
        validateOnBlur={false}
        onSubmit={(values, { setSubmitting }) => {
          // props.updateGoal(values)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <InvestmentPreview
              values={goal}
              investmentType={goal.investmentType}
              readMode
            />
            <div>
              <CurrencyField
                id="currentDeposit"
                name="currentDeposit"
                label={messages.depositValue}
              />
            </div>
            <div className="alignCenter">
              <Button
                type="submit"
                id="updateGoal"
                disabled={isSubmitting}
                small
              >
                <FormattedMessage {...messages.saveGoal} />
              </Button>
            </div>
          </StyledForm>
        )}
      </Formik>
    </Loader>
  )
}

GoalDetailsForm.propTypes = {
  goal: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // updateGoal: PropTypes.func.isRequired,
}

export default GoalDetailsForm
