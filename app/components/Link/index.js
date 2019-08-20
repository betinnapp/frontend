/**
 *
 * Link
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

const LinkStyled = styled(({ bold, small, ...rest }) => (
  <RouterLink {...rest} />
))`
  color: ${props => (props.bold && '#000') || '#767676'};
  font-size: ${props => (props.small && '12px') || '1em'};
  font-weight: ${props => (props.bold && 'bold') || '600'};
  text-transform: ${props => (props.small && 'none') || 'uppercase'};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function Link(props) {
  return (
    <LinkStyled
      to={props.to}
      id={props.id}
      bold={props.bold}
      small={props.small}
    >
      {props.children}
    </LinkStyled>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  small: PropTypes.bool,
  bold: PropTypes.bool,
}

export default Link
