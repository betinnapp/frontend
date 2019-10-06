/**
 *
 * ReadOnlyField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedNumber } from 'react-intl'

import Label from 'components/Label'
import Text from 'components/Text'

const Wrapper = styled.div`
`
const ValueText = styled(Text)`
  font-size: ${props => props.bigValue && '24px'};
  color: ${props => props.bigValue && '#06b492'};
`

function ReadOnlyField({
  bigValue,
  label,
  prefix,
  type,
  value,
}) {
  let formattedValue
  switch (type) {
    case 'number':
      formattedValue = value || value === 0 ? value : '-'
      break
    case 'currency':
      formattedValue = (
        <FormattedNumber
          value={value}
          style="currency" // eslint-disable-line react/style-prop-object
          currency="BRL"
        />
      )
      break
    default:
      formattedValue = value || '-'
  }

  return (
    <Wrapper>
      <Label label={label} />
      <ValueText
        greyDark
        bold
        bigValue={bigValue}
      >
        {prefix}
        {formattedValue}
      </ValueText>
    </Wrapper>
  )
}

ReadOnlyField.propTypes = {
  label: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bigValue: PropTypes.bool,
  type: PropTypes.string,
  prefix: PropTypes.string,
}

export default ReadOnlyField
