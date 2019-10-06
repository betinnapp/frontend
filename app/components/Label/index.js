/**
 *
 * Label
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Text from 'components/Text'

const StyledLabel = styled(Text)`
  font-size: 12px;
  line-height: 32px;
  pointer-events: none;
`

function Label(props) {
  return (
    <StyledLabel
      semiBold
      secondary
      className={props.className}
    >
      <FormattedMessage {...props.label} />
    </StyledLabel>
  )
}

Label.propTypes = {
  label: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default Label
