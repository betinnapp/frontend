import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ReadOnlyField from 'components/ReadOnlyField'

import messages from './messages'

const Wrapper = styled.div`
  text-align: center;
  .header {
    border-bottom: 2px solid #efefef;
  }
`

export function InvestimentPreview(props) {
  const { investimentType = {}, values } = props
  const depositTotal = values.depositTotal || 0
  const monthlyDeposit = values.monthlyDeposit || 0

  let total = depositTotal
  let totalIncome = 0
  let totalTax = 0
  const monthTaxRate = ((investimentType.interestRate || 0) / 100) / 12

  const getTaxRate = month => {
    const interest = (investimentType.interest || [])
      .find(({ startMonth, finalMonth }) => startMonth <= month && finalMonth >= month)
    return (interest ? interest.aliquot : 0) / 100
  }

  for (let i = 0; i < values.duration; i += 1) {
    const monthlyIncome = total * monthTaxRate
    totalTax += monthlyIncome * getTaxRate(i)
    totalIncome += monthlyIncome
    total += monthlyIncome + monthlyDeposit
  }

  const normalizedValues = {
    netTotal: total - totalTax,
    depositedTotal: depositTotal + (monthlyDeposit * values.duration),
    interestEarnedInThePeriod: totalIncome,
    totalTax,
  }

  return (
    <Wrapper>
      <div className="header">
        <ReadOnlyField
          label={messages.netTotal}
          value={normalizedValues.netTotal}
          bigValue
          type="currency"
        />
      </div>
      <ReadOnlyField
        label={messages.depositedTotal}
        value={normalizedValues.depositedTotal}
        type="currency"
      />
      <ReadOnlyField
        label={messages.interestEarnedInThePeriod}
        value={normalizedValues.interestEarnedInThePeriod}
        prefix="+"
        type="currency"
      />
      <ReadOnlyField
        label={messages.totalTax}
        value={normalizedValues.totalTax}
        prefix="-"
        type="currency"
      />
    </Wrapper>
  )
}

InvestimentPreview.propTypes = {
  values: PropTypes.object.isRequired,
  investimentType: PropTypes.object,
}

export default InvestimentPreview
