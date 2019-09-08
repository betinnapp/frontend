/**
 *
 * CardItem
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { StatusType } from 'containers/App/enums'
import Text from 'components/Text'

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  height: 346px;
  width: 335px;
  border-radius: 20px;
  margin: 0 4px 40px;
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

function CardItem(props) {
  const { image, name, submodule } = props
  const completedSubmodulesLength = submodule.filter(
    subItem => subItem.status === StatusType.COMPLETED,
  ).length
  const submodulesCompleted = completedSubmodulesLength === submodule.length

  return (
    <Wrapper image={image}>
      <div className="banner" />
      <DescriptionArea>
        <Text light huge>
          {name}
        </Text>
        <Text big bold>
          {submodulesCompleted
            ? 'OK' // TODO: Import Font Awesome icons and use a done icon here
            : `${completedSubmodulesLength}/${submodule.length}`}
        </Text>
      </DescriptionArea>
    </Wrapper>
  )
}

CardItem.propTypes = {
  name: PropTypes.string,
  submodule: PropTypes.array,
  image: PropTypes.string,
}

export default CardItem
