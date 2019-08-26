/**
 *
 * Button
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  outline: none;
  background: ${({ secondary }) => (secondary && '#904ee2') || '#00dba1'};
  border: none;
  border-radius: 16px;
  width: 296px;
  height: 60px;
  text-transform: uppercase;
  color: #f4f4f4;
  font-size: 18px;
  font-weight: bold;
  transition: ease 0.3s;

  &:hover {
    filter: brightness(85%);
  }

  &:active {
    transform: translateY(2px);
  }

  &:disabled,
  &:disabled&:hover {
    background: #a3a3a3;
  }
`

function Button(props) {
  return (
    <StyledButton
      type={props.type}
      id={props.id}
      onClick={props.onClick}
      disabled={props.disabled}
      secondary={props.secondary}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
}

Button.defualtProps = {
  type: 'button',
}

export default Button
