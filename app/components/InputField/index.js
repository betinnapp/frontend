/**
 *
 * InputField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import {
  Field,
  ErrorMessage,
  connect,
  getIn,
} from 'formik'

import Label from 'components/Label'
import Text from 'components/Text'

const Wrapper = styled.div`
  position: relative;
  text-align: initial;
  margin-top: 16px;

  .prefix {
    position: absolute;
    top: 0;
    left: 0;
    line-height: 30px;
  }

  .label {
    position: absolute;
    left: 0px;
    top: 0;
    transition: 0.2s ease all;
    color: ${props => props.error && '#f2994a'};
  }

  > input:focus ~ .label,
  > input:not(:placeholder-shown) ~ .label {
    opacity: 1;
    top: -23px;
  }

  > input {
    font-size: 14px;
    width: 100%;
    height: 32px;
    background: none;
    border: none;
    outline: none;
    border-bottom: 2px solid ${props => (props.error && '#f2994a') || '#bababa'};
    padding-left: ${props => props.showPrefix && '20px'};

    &:focus {
      border-image-source: linear-gradient(45deg, #9657f6, #00dba1);
      border-image-slice: 1;

      ~ .label {
        color: #9657f6;
      }
    }

    &[type=number] {
      appearance: textfield;
      &::-webkit-inner-spin-button, 
      &::-webkit-outer-spin-button { 
        -webkit-appearance: none;
      }
    }
  }
`

const ErrorMessageWrapper = styled.div`
  margin-top: 4px;
  min-height: 18px;
`

function InputField({
  formik,
  label,
  name,
  prefix,
  ...props
}) {
  const error = getIn(formik.errors, name)
  const touch = getIn(formik.touched, name)
  const value = getIn(formik.values, name)
  const showPrefix = prefix && value

  return (
    <Wrapper error={touch && error} showPrefix={showPrefix}>
      {showPrefix ? (
        <div className="prefix">
          {prefix}
        </div>
      ) : null}
      <Field name={name} {...props} autoComplete="off" placeholder=" " />

      <Label className="label" label={label} />

      <ErrorMessageWrapper>
        <ErrorMessage name={name}>
          {errorMessage => (
            <Text error>
              <FormattedMessage {...errorMessage} />
            </Text>
          )}
        </ErrorMessage>
      </ErrorMessageWrapper>
    </Wrapper>
  )
}

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
  prefix: PropTypes.string,
}

export default connect(InputField)
