import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Text from 'components/Text'

import messages from './messages'

const StyledHeader = styled.div`
  background: #fff;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export function Header() {
  return (
    <StyledHeader>
      <Text medium terciary semiBold>
        <FormattedMessage {...messages.tellAboutYou} />
      </Text>
    </StyledHeader>
  )
}

export default Header
