/**
 *
 * Button
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import history from 'utils/history'

const SecondaryButton = css`
  background: #904ee2;
`

const SmallButton = css`
  font-size: 14px;
  height: 40px;
  border-radius: 8px;
`

const StyledButton = styled.button`
  outline: none;
  background: #00dba1;
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

  ${props => props.small && SmallButton}
  ${props => props.secondary && SecondaryButton}
`

function Button(props) {
  const onClickHandler = () => {
    if (props.onClick) {
      props.onClick()
    } else if (props.link) {
      history.push(props.link)
    }
  }

  return (
    <StyledButton
      type={props.type}
      id={props.id}
      onClick={onClickHandler}
      disabled={props.disabled}
      secondary={props.secondary}
      small={props.small}
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
  small: PropTypes.bool,
  link: PropTypes.string,
}

Button.defualtProps = {
  type: 'button',
}

export default Button
