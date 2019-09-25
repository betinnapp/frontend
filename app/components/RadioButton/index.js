import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'components/Text'

const Label = styled.label`
  margin-left: 16px;
`

function RadioButton(props) {
  const {
    field: {
      name, value, onChange, onBlur
    },
    id,
    text,
  } = props

  return (
    <Text medium>
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Label htmlFor={id}>{text}</Label>
    </Text>
  )
}

RadioButton.propTypes = {
  field: PropTypes.object,
  id: PropTypes.string,
  text: PropTypes.string,
}

RadioButton.defaultProps = {
  field: {},
}

export default RadioButton
