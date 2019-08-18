/**
 *
 * Slogan
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'images/icon.svg'
import messages from 'containers/App/messages'

const Wrapper = styled.div`
  display: inline-block;
  font-size: ${props => (props.big ? '28px' : '16px')};
  font-weight: bold;
  text-transform: uppercase;

  img {
    width: ${props => (props.big ? '96px' : '46px')};
    margin-right: ${props => (props.big ? '20px' : '10px')};
  }
`

function Slogan({ big }) {
  return (
    <Wrapper big={big}>
      <img src={Icon} alt="Betinnapp icon" />
      <FormattedMessage {...messages.betinnapp} />
    </Wrapper>
  )
}

Slogan.propTypes = {
  big: PropTypes.bool,
}

Slogan.defaultProps = {
  big: false,
}

export default Slogan
