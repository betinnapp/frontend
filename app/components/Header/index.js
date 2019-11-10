/**
 *
 * Header
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BackButton from 'components/BackButton'
import ContentWrapper from 'components/ContentWrapper'
import Slogan from 'components/Slogan'

const Wrapper = styled(ContentWrapper)`
  padding: 8px;
`

function Header(props) {
  return (
    <Wrapper
      flexbox
      justifyContent="space-between"
      alignItems="center"
    >
      <BackButton backTo={props.backTo} />
      <Slogan />
      <div />
    </Wrapper>
  )
}

Header.propTypes = {
  backTo: PropTypes.string,
}

export default Header
