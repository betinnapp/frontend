/**
 *
 * BackButton
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import history from 'utils/history'

const ButtonWrapper = styled.button`
  font-size: 36px;
  cursor: pointer;
  padding: 0 6px;
  border: none;
  outline: none;
  background: none;
  color: ${props => props.white && '#fff'};
`

function BackButton({ backTo, white, onClick }) {
  const onClickHandler = () => {
    if (onClick) {
      onClick()
    } else if (backTo) {
      history.push(backTo)
    } else {
      history.goBack()
    }
  }

  return (
    <ButtonWrapper onClick={onClickHandler} white={white}>
      <FontAwesomeIcon icon="angle-left" />
    </ButtonWrapper>
  )
}

BackButton.propTypes = {
  backTo: PropTypes.string,
  white: PropTypes.bool,
  onClick: PropTypes.func,
}

export default BackButton
