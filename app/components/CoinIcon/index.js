/**
 *
 * CoinIcon
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import coinIcon from 'images/coinIcon.svg'
import Text from 'components/Text'

const Icon = styled.img`
  height: 20px;
`

function CoinIcon({ coins }) {
  return (
    <Text medium bold>
      {coins}
      <Icon src={coinIcon} alt="Coin" />
    </Text>
  )
}

CoinIcon.propTypes = {
  coins: PropTypes.number,
}

export default CoinIcon
