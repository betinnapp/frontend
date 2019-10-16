/**
 *
 * Title
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'components/Text'

const Wrapper = styled(Text)`
  text-align: center;
  font-size: 24px;
`

function Title({ children }) {
  return (
    <Wrapper bold greyDarkest>
      {children}
    </Wrapper>
  )
}

Title.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Title
