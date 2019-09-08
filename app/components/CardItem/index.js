/**
 *
 * CardItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { StatusType } from 'containers/App/enums'
import Text from 'components/Text'
import Lock from 'images/lock.png'

import messages from './messages'

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  height: 346px;
  width: 335px;
  border-radius: 20px;
  margin: 20px 4px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;

  .banner {
    flex: 1;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }
`

const DescriptionArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
  min-height: 65px;
  background-color: #e2e2e2;

  > :first-child {
    flex: 1;
  }
`

const DoneIcon = styled.span`
  color: #00dba1;
`

const Blocked = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 24px;

  > * {
    z-index: 2;
  }

  .blockedBackground {
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #e2e2e2;
    opacity: 0.8;
  }
`

function CardItem(props) {
  const { image, name, status, submodule } = props
  const completedSubmodulesLength = submodule.filter(
    subItem => subItem.status === StatusType.COMPLETED,
  ).length
  const submodulesCompleted = completedSubmodulesLength === submodule.length

  return (
    <Wrapper image={image}>
      <div className="banner">
        {status === StatusType.LOCKED && (
          <Blocked>
            <img src={Lock} alt="Lock" />
            <Text medium>
              <FormattedMessage {...messages.finishLastOneToUnlock} />
            </Text>
            <div className="blockedBackground" />
          </Blocked>
        )}
      </div>
      <DescriptionArea>
        <Text light huge>
          {name}
        </Text>
        <Text big bold>
          {submodulesCompleted ? (
            <DoneIcon>OK</DoneIcon> // TODO: Import Font Awesome icons and use a done icon here
          ) : (
            `${completedSubmodulesLength}/${submodule.length}`
          )}
        </Text>
      </DescriptionArea>
    </Wrapper>
  )
}

CardItem.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  submodule: PropTypes.array,
  image: PropTypes.string,
}

export default CardItem
