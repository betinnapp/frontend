import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { MODULE_DETAILS_PATH } from 'containers/App/urls'
import BackButton from 'components/BackButton'
import Button from 'components/Button'
import CoinIcon from 'components/CoinIcon'
import history from 'utils/history'
import Text from 'components/Text'

import messages from './messages'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fafafa;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 0;
  .backButton {
    width: 100%;
    margin-bottom: 8px;
  }
  .content {
    text-align: center;
    flex: 1;
    background: #ffffff;
    border-radius: 8px 8px 0 0;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px;
  }
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
      <div className="backButton">
        <BackButton onClick={handleClose} />
      </div>

      <div className="content">
        <Text huge semiBold greyDarkest>
          {moduleInfo.name}
        </Text>

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
