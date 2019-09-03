/**
 *
 * HomePage
 *
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import Button from 'components/Button'
import history from 'utils/history'
import Link from 'components/Link'
import Slogan from 'components/Slogan'
import stat from 'images/stat.svg'

import Text from '../../components/Text'
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
`

export default function HomePage() {
  const startNowOnClickHandler = () => {
    history.push('/register')
  }

  return (
    <Wrapper>
      <Slogan />

      <div>
        <img src={stat} alt="Stats" />
        <Text bold fontSize="18">
          <FormattedMessage {...messages.learnToManagerYourFinances} />
        </Text>
      </div>
      <div>
        <Button id="startNow" onClick={startNowOnClickHandler}>
          <FormattedMessage {...messages.startNow} />
        </Button>
        <Text>
          <Link id="haveAnAccount" to="/login">
            <FormattedMessage {...messages.alreadyHaveAnAccount} />
          </Link>
        </Text>
      </div>
    </Wrapper>
  )
}
