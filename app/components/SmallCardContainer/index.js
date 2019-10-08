/**
 *
 * SmallCardContainer
 *
 */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.button`
  padding: 0 16px;
  width: 100%;
  min-height: 56px;
  background: #fff;
  margin-bottom: 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.2s ease all;
  position: relative;

  &:hover {
    transform: scale(1.01);
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.99);    
  }
`

function SmallCardContainer({ children, onClick }) {
  const onClickHandler = () => {
    if (onClick) {
      return onClick()
    }

    return null
  }

  return (
    <Wrapper onClick={onClickHandler}>
      {children}
    </Wrapper>
  )
}

SmallCardContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default SmallCardContainer
