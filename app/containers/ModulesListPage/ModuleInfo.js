import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { MODULE_DETAILS_PATH } from 'containers/App/urls'
import Button from 'components/Button'
import CoinIcon from 'components/CoinIcon'
import history from 'utils/history'
import Text from 'components/Text'

import messages from './messages'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 50%;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 0;
  .content {
    text-align: center;
    flex: 1;
    background: #ffffff;
    border-radius: 8px 8px 0 0;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px 0;
  }
`
const CloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 15px;

  button {
    -webkit-appearance: none;
    background: none;
    outline: none;
    padding: 0;
    border: 0;
    margin: 0;
    cursor: pointer;
    font-size: 24px;
  }
`
const Title = styled(Text)`
  margin: 0 20px;
`

export function ModuleInfo({
  moduleInfo = {},
  handleClose,
}) {
  const reward = (moduleInfo.submodule || []).reduce((acc, submodule) => acc + (submodule.reward || 0), 0)

  const goToSubmoduleList = () => {
    const url = MODULE_DETAILS_PATH.replace(':moduleId', moduleInfo.id)
    history.push(url)
  }

  return (
    <Container>
      <CloseButton className="closeButtonContainer">
        <button
          type="button"
          onClick={handleClose}
        >
          <FontAwesomeIcon icon="times" />
        </button>
      </CloseButton>

      <div className="content">
        <Title big semiBold greyDarkest>
          {moduleInfo.name}
        </Title>

        <Text medium greyDark>
          {moduleInfo.description}
        </Text>

        <div>
          <CoinIcon coins={`+ ${reward}`} />
          <Text uppercase small secondary bold>
            <FormattedMessage {...messages.coins} />
          </Text>
        </div>

        <Button
          id="goToSubmoduleList"
          onClick={goToSubmoduleList}
        >
          <FormattedMessage {...messages.start} />
        </Button>
      </div>
    </Container>
  )
}

ModuleInfo.propTypes = {
  moduleInfo: PropTypes.object,
  handleClose: PropTypes.func,
}

export default ModuleInfo
