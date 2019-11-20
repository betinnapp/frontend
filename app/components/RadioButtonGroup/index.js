import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'formik'
import { FormattedMessage } from 'react-intl'

import Text from 'components/Text'
import RadioButton from 'components/RadioButton'

const Wrapper = styled.div`
  width: 100%;
  > * {
    margin-bottom: 16px;
  }
`

function RadioButtonGroup({
  error,
  touched,
  options,
  label,
  name,
  submitted,
  correctOption,
  disabled,
}) {
  return (
    <Wrapper>
      <Text big bold>{label}</Text>
      {options.map(option => (
        <Field
          key={option.id}
          component={RadioButton}
          name={name}
          submitted={submitted}
          correctOption={correctOption}
          disabled={disabled}
          {...option}
        />
      ))}
      {touched && error && (
        <Text error>
          <FormattedMessage {...error} />
        </Text>
      )}
    </Wrapper>
  )
}

RadioButtonGroup.propTypes = {
  error: PropTypes.object,
  touched: PropTypes.bool,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  submitted: PropTypes.bool,
  correctOption: PropTypes.string,
  disabled: PropTypes.bool,
}

export default RadioButtonGroup
