/**
 *
 * Link
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const LinkStyled = styled(RouterLink)`
  color: #767676;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function Link(props) {
  return (
    <LinkStyled id={props.id} to={props.to}>
      {props.children}
    </LinkStyled>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Link
