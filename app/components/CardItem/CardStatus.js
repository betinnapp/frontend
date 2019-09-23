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

const DoneIcon = styled.span`
  color: #00dba1;
`

function CardItem(props) {
  const { status, submodule } = props

  const completedSubmodulesLength = (submodule || []).filter(
    subItem => subItem.status === StatusType.COMPLETED,
  ).length
  const submodulesCompleted = submodule && completedSubmodulesLength === submodule.length

  let content = null
  if (status === StatusType.COMPLETED || submodulesCompleted) {
    content = <DoneIcon>OK</DoneIcon> // TODO: Import Font Awesome icons and use a done icon here
  } else if (submodule) {
    content = `${completedSubmodulesLength}/${submodule.length}`
  }

  return (
    <Text big bold>
      {content}
    </Text>
  )
}

CardItem.propTypes = {
  status: PropTypes.string,
  submodule: PropTypes.array,
}

export default CardItem
