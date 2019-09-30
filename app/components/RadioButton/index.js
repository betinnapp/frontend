import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'components/Text'

const Label = styled.label`
  margin-left: 16px;
`

const Wrapper = styled(Text)`
  &.correctOption {
    color: #00dba1;
  }

  &.wrongOption {
    color: #dc2e2e;
  }
`

function RadioButton(props) {
  const {
    field: {
      name, value, onChange, onBlur,
    },
    id,
    text,
    submitted,
    correctOption,
    disabled,
  } = props
  const isChecked = id === value

  let className = ''
  if (submitted && correctOption) {
    if (correctOption === id) {
      className = 'correctOption'
    } else if (isChecked) {
      className = 'wrongOption'
    }
  }

  return (
    <Wrapper medium className={className}>
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        checked={isChecked}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      <Label htmlFor={id}>{text}</Label>
    </Wrapper>
  )
}

RadioButton.propTypes = {
  field: PropTypes.object,
  id: PropTypes.string,
  text: PropTypes.string,
  submitted: PropTypes.bool,
  correctOption: PropTypes.string,
  disabled: PropTypes.bool,
}

RadioButton.defaultProps = {
  field: {},
}

export default RadioButton
