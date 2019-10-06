import React from 'react'
import styled from 'styled-components'

import ReadOnlyField from 'components/ReadOnlyField'

import messages from './messages'

const Wrapper = styled.div`
  text-align: center;
  .header {
    border-bottom: 2px solid #efefef;
  }
`

export function InvestimentPreview() {
  return (
    <Wrapper>
      <div className="header">
        <ReadOnlyField
          label={messages.grossTotal}
          value="Test"
          bigValue
        />
      </div>
      <ReadOnlyField
        label={messages.depositedTotal}
        value="Test"
      />
      <ReadOnlyField
        label={messages.totalTax}
        value="Test"
      />
      <ReadOnlyField
        label={messages.interestEarnedInThePeriod}
        value="Test"
      />
    </Wrapper>
  )
}

export default InvestimentPreview
