import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'

import Button from 'components/Button'
import CurrencyField from 'components/CurrencyField'
import InputField from 'components/InputField'
import InvestmentPreview from 'components/InvestmentPreview'
import SelectField from 'components/SelectField'
import SliderField from 'components/SliderField'
import Text from 'components/Text'

import messages from './messages'

const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 980px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .alignCenter {
    text-align: center;
  }
`
const SliderWrapper = styled.div`
  text-align: center;
`

const initialValues = {
  investmentType: '',
  duration: 1,
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

  const getInvestmentPreview = (values, investment) => {
    const depositTotal = values.depositTotal || 0
    const monthlyDeposit = values.monthlyDeposit || 0

    let total = depositTotal
    let totalIncome = 0
    let totalTax = 0
    const monthTaxRate = ((investment.interestRate || 0) / 100) / 12

    const getTaxRate = month => {
      const interest = (investment.interest || [])
        .find(({ startMonth, finalMonth }) => startMonth <= month && finalMonth >= month)
      return (interest ? interest.aliquot : 0) / 100
    }

    for (let i = 0; i < values.duration; i += 1) {
      const monthlyIncome = total * monthTaxRate
      totalTax += monthlyIncome * getTaxRate(i)
      totalIncome += monthlyIncome
      total += monthlyIncome + monthlyDeposit
    }

    return {
      header: [
        {
          id: 'netTotal',
          label: messages.netTotal,
          value: total - totalTax,
          type: 'currency',
          bigValue: true,
          green: true,
        },
      ],
      fields: [
        {
          id: 'depositedTotal',
          label: messages.depositedTotal,
          value: depositTotal + (monthlyDeposit * values.duration),
          type: 'currency',
        },
        {
          id: 'interestEarnedInThePeriod',
          label: messages.interestEarnedInThePeriod,
          value: totalIncome,
          prefix: '+',
          type: 'currency',
        },
        {
          id: 'totalTax',
          label: messages.totalTax,
          value: totalTax,
          prefix: '-',
          type: 'currency',
        },
      ],
    }
  }

  const renderDuration = value => (
    <Text semiBold secondary>
      <FormattedMessage
        {...messages.monthCount}
        values={{ months: value }}
      />
    </Text>
  )

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
        const investmentPreview = getInvestmentPreview(values, selectedInvestment)

        return (
          <StyledForm>
            <InvestmentPreview
              {...investmentPreview}
            />
            <div>
              <SelectField
                label={messages.investmentType}
                id="investmentType"
                name="investmentType"
                options={props.investmentTypesOptions}
              />
              <SliderWrapper>
                <SliderField
                  id="duration"
                  name="duration"
                  label={messages.investmentTime}
                  min={selectedInvestment.minInvestmentMonthTime}
                />
                {renderDuration(values.duration)}
              </SliderWrapper>
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
