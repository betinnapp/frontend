/**
 *
 * DoneIcon
 *
 */

import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledDoneIcon = styled(FontAwesomeIcon)`
  color: #06B492;
`

function DoneIcon() {
  return <StyledDoneIcon icon="check-circle" size="lg" />
}

export default DoneIcon
