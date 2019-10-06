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
  const { values } = props
  const depositTotal = values.depositTotal || 0
  const monthlyDeposit = values.monthlyDeposit || 0

  let total = depositTotal
  let totalIncome = 0
  let totalTax = 0
  const monthTaxRate = 0.054 / 12

  for (let i = 0; i < values.duration; i += 1) {
    const monthlyIncome = total * monthTaxRate
    totalTax += monthlyIncome * 0.225
    totalIncome += monthlyIncome
    total += monthlyIncome + monthlyDeposit
  }

  const normalizeToCurrency = value => `R$${parseFloat(value).toFixed(2)}`

  const normalizedValues = {
    netTotal: normalizeToCurrency(total - totalTax),
    depositedTotal: normalizeToCurrency(depositTotal + (monthlyDeposit * values.duration)),
    interestEarnedInThePeriod: `+${normalizeToCurrency(totalIncome)}`,
    totalTax: `-${normalizeToCurrency(totalTax)}`,
  }

  return (
    <Wrapper>
      <div className="header">
        <ReadOnlyField
          label={messages.netTotal}
          value={normalizedValues.netTotal}
          bigValue
        />
      </div>
      <ReadOnlyField
        label={messages.depositedTotal}
        value={normalizedValues.depositedTotal}
      />
      <ReadOnlyField
        label={messages.interestEarnedInThePeriod}
        value={normalizedValues.interestEarnedInThePeriod}
      />
      <ReadOnlyField
        label={messages.totalTax}
        value={normalizedValues.totalTax}
      />
    </Wrapper>
  )
}

InvestimentPreview.propTypes = {
  values: PropTypes.object.isRequired,
}

export default InvestimentPreview
