import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'

import Button from 'components/Button'
import CurrencyField from 'components/CurrencyField'
import InputField from 'components/InputField'
import NumberField from 'components/NumberField'
import SelectField from 'components/SelectField'

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
  investmentType: '',
  duration: '',
  name: '',
  depositTotal: '',
  monthlyDeposit: '',
}

const goalFormShape = yup.object().shape({
  investmentType: yup.string().required(messages.required),
  duration: yup.string().required(messages.required),
  name: yup.string().required(messages.required),
  depositTotal: yup.string().required(messages.required),
  monthlyDeposit: yup.string().required(messages.required),
})

function NewGoalForm(props) {
  const { investmentTypes } = props

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={goalFormShape}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting }) => {
        props.saveGoal(values)
        setSubmitting(false)
      }}
    >
      {({ values, isSubmitting }) => {
        const selectedInvestment = investmentTypes.find(type => type.id === values.investmentType) || {}

        return (
          <StyledForm>
            <InvestmentPreview
              values={values}
              investmentType={selectedInvestment}
            />
            <div>
              <SelectField
                label={messages.investmentType}
                id="investmentType"
                name="investmentType"
                options={props.investmentTypesOptions}
              />
              <NumberField
                id="duration"
                name="duration"
                label={messages.investmentTime}
                min={selectedInvestment.minInvestmentMonthTime}
              />
              <InputField
                type="text"
                id="name"
                name="name"
                label={messages.goalName}
              />
              <CurrencyField
                id="depositTotal"
                name="depositTotal"
                label={messages.initialValue}
              />
              <CurrencyField
                id="monthlyDeposit"
                name="monthlyDeposit"
                label={messages.monthlyDeposit}
              />
            </div>
            <div className="alignCenter">
              <Button
                type="submit"
                id="saveAsGoal"
                disabled={isSubmitting}
                small
              >
                <FormattedMessage {...messages.saveAsGoal} />
              </Button>
            </div>
          </StyledForm>
        )
      }}
    </Formik>
  )
}

NewGoalForm.propTypes = {
  investmentTypes: PropTypes.array,
  investmentTypesOptions: PropTypes.array,
  saveGoal: PropTypes.func,
}

export default NewGoalForm
