import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import messages from './messages'

const StyledHeader = styled.div`
  background: #fff;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderTitle = styled.span`
  color: #9657f6;
  font-size: 18px;
  font-weight: 600;
`

export function Header() {
  return (
    <StyledHeader>
      <HeaderTitle>
        <FormattedMessage {...messages.tellAboutYou} />
      </HeaderTitle>
    </StyledHeader>
  )
}

export default Header
