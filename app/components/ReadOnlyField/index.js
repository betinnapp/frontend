/**
 *
 * ReadOnlyField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Label from 'components/Label'
import Text from 'components/Text'

const Wrapper = styled.div`
`
const ValueText = styled(Text)`
  font-size: ${props => props.bigValue && '24px'};
  color: ${props => props.bigValue && '#06b492'};
`

function ReadOnlyField(props) {
  const { bigValue, label, value } = props

  return (
    <Wrapper>
      <Label label={label} />
      <ValueText
        greyDark
        bold
        bigValue={bigValue}
      >
        {value === 0 || value ? value : '-'}
      </ValueText>
    </Wrapper>
  )
}

ReadOnlyField.propTypes = {
  label: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bigValue: PropTypes.bool,
}

export default ReadOnlyField
