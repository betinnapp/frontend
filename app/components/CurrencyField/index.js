/**
 *
 * CurrencyField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect, getIn } from 'formik'

import InputField from 'components/InputField'

const Wrapper = styled.div`
  position: relative;

  .actionButtons {
    position: absolute;
    top: 0;
    right: 0;
  }

  input {
    padding-right: 60px;
  }

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
  const { formik, name } = props
  const value = getIn(formik.values, name) || 0

  const handleRemoveClick = () => {
    formik.setFieldValue(name, value - 100)
  }

  const handleAddClick = () => {
    formik.setFieldValue(name, value + 100)
  }

  return (
    <Wrapper>
      <InputField
        {...props}
        type="number"
        min={props.min}
        step="1"
        prefix="R$"
      />
      <div className="actionButtons">
        <button
          type="button"
          className="minusButton"
          onClick={handleRemoveClick}
        >
          -
        </button>
        <button
          type="button"
          className="plusButton"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
    </Wrapper>
  )
}

CurrencyField.propTypes = {
  min: PropTypes.number,
  name: PropTypes.string,
  formik: PropTypes.object,
}

CurrencyField.defaultProps = {
  min: 0,
}

export default connect(CurrencyField)
