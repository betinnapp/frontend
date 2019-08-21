/**
 *
 * InputField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  > input:focus ~ .label,
  > input:not(:focus):valid ~ .label {
    opacity: 1;
    top: -25px;
  }

  > input {
    font-size: 14px;
    width: 100%;
    height: 32px;
    background: none;
    border: none;
    border-bottom: 2px solid #bababa;
  }

  .label {
    position: absolute;
    left: 0px;
    top: 0;
    font-size: 12px;
    line-height: 32px;
    pointer-events: none;
    transition: 0.2s ease all;
  }
`

function InputField(props) {
  return (
    <Wrapper>
      <input type={props.type} id={props.id} name={props.name} required />
      <span className="label">
        <FormattedMessage {...props.label} />
      </span>
    </Wrapper>
  )
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
}

export default InputField
