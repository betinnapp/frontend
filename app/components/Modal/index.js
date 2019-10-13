/**
 *
 * Modal
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'

import messages from './messages'

const Wrapper = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(51, 51, 51, 0.5)
`
const StyledModal = styled.div`
  max-width: 520px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  .content {
    padding: 16px;
  }

  .footer {
    border-top: 1px solid #e6e6e6;
    padding: 18px;

    button {
      background: none;
      outline: none;
      border: none;
      width: 50%;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;

      &.cancel {
        border-right: 1px solid #e6e6e6;
        color: #eb5757;
      }

      &.confirm {
        color: #06b492;
      }
    }
  }
`

function Modal(props) {
  return (
    <Wrapper open={props.open}>
      <StyledModal>
        <div className="content">
          {props.children}
        </div>
        <div className="footer">
          <button
            type="button"
            id="cancelButton"
            className="cancel"
            onClick={props.onCancelClick}
          >
            <FormattedMessage {...props.cancelMessage} />
          </button>
          <button
            type="button"
            id="confirmButton"
            className="confirm"
            onClick={props.onConfirmClick}
          >
            <FormattedMessage {...props.confirmMessage} />
          </button>
        </div>
      </StyledModal>
    </Wrapper>
  )
}

Modal.propTypes = {
  children: PropTypes.element,
  open: PropTypes.bool,
  cancelMessage: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }),
  confirmMessage: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }),
  onCancelClick: PropTypes.func,
  onConfirmClick: PropTypes.func,
}

Modal.defaultProps = {
  open: false,
  cancelMessage: messages.cancel,
  confirmMessage: messages.confirm,
}

export default Modal
