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
  padding: none;
  border: none;
  outline: none;
  background: none;
`

function BackButton({ backTo }) {
  const onClickHandler = () => {
    if (backTo) {
      history.push(backTo)
    } else {
      history.goBack()
    }
  }

  return (
    <ButtonWrapper onClick={onClickHandler}>
      <FontAwesomeIcon icon="angle-left" />
    </ButtonWrapper>
  )
}

BackButton.propTypes = {
  backTo: PropTypes.string,
}

export default BackButton
