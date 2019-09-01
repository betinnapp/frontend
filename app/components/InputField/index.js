/**
 *
 * InputField
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { Field, ErrorMessage, connect, getIn } from 'formik'

import Text from 'components/Text'

const Wrapper = styled.div`
  position: relative;

  .label {
    position: absolute;
    left: 0px;
    top: 0;
    font-size: 12px;
    line-height: 32px;
    pointer-events: none;
    transition: 0.2s ease all;
    color: ${props => props.error && '#f2994a'};
  }

  > input:focus ~ .label,
  > input:not(:focus) ~ .label {
    opacity: 1;
    top: -25px;
  }

  > input {
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
    }
  }
`

const FieldError = styled.p`
  color: #f2994a;
  font-size: 11px;
  font-weight: bold;
  margin: 0;
`

function InputField({ formik, label, name, ...props }) {
  const error = getIn(formik.errors, name)
  const touch = getIn(formik.touched, name)

  return (
    <Wrapper error={touch && error}>
      <Field name={name} {...props} autoComplete="off" />

      <Text className="label" semiBold secondary>
        <FormattedMessage {...label} />
      </Text>

      <ErrorMessage name={name}>
        {errorMessage => (
          <FieldError>
            <FormattedMessage {...errorMessage} />
          </FieldError>
        )}
      </ErrorMessage>
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
}

export default connect(InputField)
