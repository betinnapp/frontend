/**
 *
 * NumberField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'

import InputField from 'components/InputField'

function NumberField(props) {
  const { min, max, formik, ...rest } = props

  const handleOnChange = event => {
    const newEvent = event
    const { target: { value } } = newEvent

    if (min > value) {
      newEvent.target.value = min
    } else if (max < value) {
      newEvent.target.value = max
    }

    props.formik.handleChange(newEvent)
  }

  return (
    <InputField
      {...rest}
      type="number"
      onChange={handleOnChange}
      min={min}
      max={max}
    />
  )
}

NumberField.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  formik: PropTypes.object.isRequired,
}

NumberField.defaultProps = {
  min: 0,
}

export default connect(NumberField)
