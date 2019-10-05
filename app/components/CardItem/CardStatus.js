import React from 'react'
import PropTypes from 'prop-types'

import DoneIcon from 'components/DoneIcon'
import { StatusType } from 'containers/App/enums'
import Text from 'components/Text'

function CardStatus(props) {
  const { status, submodule } = props

  const completedSubmodulesLength = (submodule || []).filter(
    subItem => subItem.status === StatusType.COMPLETED,
  ).length
  const submodulesCompleted = submodule && completedSubmodulesLength === submodule.length

  let content = null
  if (status === StatusType.COMPLETED || submodulesCompleted) {
    content = <DoneIcon />
  } else if (submodule) {
    content = `${completedSubmodulesLength}/${submodule.length}`
  }

  return (
    <Text big bold>
      {content}
    </Text>
  )
}

CardStatus.propTypes = {
  status: PropTypes.string,
  submodule: PropTypes.array,
}

export default CardStatus
