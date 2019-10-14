/**
 *
 * CurrencyField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputField from 'components/InputField'

const Wrapper = styled.div`
  .plusButton,
  .minusButton {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 24px;
    margin-left: 4px;
    background: #a3a3a3;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
  }

  .plusButton:hover,
  .plusButton.active {
    background: #06B492;
  }

  .minusButton:hover,
  .minusButton:active {
    background: #eb5757;
  }
`

function CurrencyField(props) {
  return (
    <Wrapper>
      <InputField
        {...props}
        type="number"
        min={props.min}
        step="1"
        prefix="R$"
      />
      {/* <div>
        <button type="button" className="minusButton">-</button>
        <button type="button" className="plusButton">+</button>
      </div> */}
    </Wrapper>
  )
}

CurrencyField.propTypes = {
  min: PropTypes.number,
}

CurrencyField.defaultProps = {
  min: 0,
}

export default CurrencyField
