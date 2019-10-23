/**
 *
 * SliderField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect, Field } from 'formik'

import Label from 'components/Label'

import StyledSlider from './StyledSlider'

function SliderField(props) {
  const {
    name,
    ...rest
  } = props

  return (
    <div>
      <Label label={props.label} className="label" />
      <Field
        name={name}
        component={CustomSlider}
        {...rest}
      />
    </div>
  )
}

const CustomSlider = fieldProps => {
  const { field, form, min } = fieldProps

  const onChange = value => {
    form.setFieldValue(field.name, value)
  }

  return (
    <StyledSlider
      value={field.value}
      min={min}
      onChange={onChange}
    />
  )
}

SliderField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
  formik: PropTypes.object.isRequired,
}

export default connect(SliderField)
