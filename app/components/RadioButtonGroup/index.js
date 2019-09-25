import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Field } from 'formik'
import { FormattedMessage } from 'react-intl'

import Text from 'components/Text'
import RadioButton from 'components/RadioButton'

const Wrapper = styled.div`
  > * {
    margin-bottom: 16px;
  }
`

function RadioButtonGroup({
  error,
  touched,
  options,
  label,
}) {
  return (
    <Wrapper>
      <Text big>{label}</Text>
      {options.map(option => (
        <Field
          key={option.id}
          component={RadioButton}
          name="radioGroup"
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
}

export default RadioButtonGroup
