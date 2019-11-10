/**
 *
 * HomePage
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { LOGIN_PATH, REGISTER_PATH } from 'containers/App/urls'
import Button from 'components/Button'
import Link from 'components/Link'
import Slogan from 'components/Slogan'
import stat from 'images/stat.svg'
import Text from 'components/Text'

import messages from './messages'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  height: 100%;

  > *:first-child {
    justify-self: start;
  }

  .growingImg {
    margin: 16px auto;
  }
`

export default function HomePage() {
  return (
    <Wrapper>
      <Slogan />

      <div>
        <img className="growingImg" src={stat} alt="Stats" />
        <Text bold fontSize="18">
          <FormattedMessage {...messages.learnToManagerYourFinances} />
        </Text>
      </div>
      <div>
        <Button id="startNow" link={REGISTER_PATH}>
          <FormattedMessage {...messages.startNow} />
        </Button>
        <Text>
          <Link id="haveAnAccount" to={LOGIN_PATH}>
            <FormattedMessage {...messages.alreadyHaveAnAccount} />
          </Link>
        </Text>
      </div>
    </Wrapper>
  )
}
