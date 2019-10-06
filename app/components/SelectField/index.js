/**
 *
 * SelectField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { compose } from 'redux'
import { injectIntl } from 'react-intl'
import { Field, ErrorMessage, getIn, connect } from 'formik'

import Label from 'components/Label'
import Text from 'components/Text'

import messages from './messages'

const Wrapper = styled.div`
  display: grid;
  .label {
    grid-row: 1;
    line-height: 16px;
    color: ${props => props.error && '#f2994a'};
  }

  > select {
    grid-row: 2;
    font-size: 14px;
    width: 100%;
    height: 32px;
    background: none;
    border: none;
    outline: none;
    border-bottom: 2px solid ${props => (props.error && '#f2994a') || '#bababa'};

    &:focus {
      border-image-source: linear-gradient(45deg, #9657f6, #00dba1);
      border-image-slice: 1;

      ~ .label {
        color: #9657f6;
      }
    }

    > options {
      margin-top: 8px;
    }
  }
`
const ErrorMessageWrapper = styled.div`
  margin-top: 4px;
  min-height: 18px;
`

function SelectField(props) {
  const {
    intl,
    options,
    label,
    name,
    formik,
    ...rest
  } = props
  const error = getIn(formik.errors, name)
  const touch = getIn(formik.touched, name)

  return (
    <Wrapper error={touch && error}>
      <Field
        component="select"
        placeholder={intl.formatMessage(label)}
        name={name}
        {...rest}
      >
        <option value="">
          {intl.formatMessage(messages.selectAnOption)}
        </option>
        {options.map(option => (
          <option
            key={option.label}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </Field>
      <Label className="label" label={label} />

      <ErrorMessageWrapper>
        <ErrorMessage name={name}>
          {errorMessage => (
            <Text error>
              {intl.formatMessage(errorMessage)}
            </Text>
          )}
        </ErrorMessage>
      </ErrorMessageWrapper>
    </Wrapper>
  )
}

SelectField.propTypes = {
  options: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  label: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
}

export default compose(
  injectIntl,
  connect,
)(SelectField)
