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
  return (
    <Wrapper>
      <Label label={props.label} />
      <ValueText
        greyDark
        bold
        bigValue={props.bigValue}
      >
        {props.value || '-'}
      </ValueText>
    </Wrapper>
  )
}

ReadOnlyField.propTypes = {
  label: PropTypes.object.isRequired,
  value: PropTypes.string,
  bigValue: PropTypes.bool,
}

export default ReadOnlyField
