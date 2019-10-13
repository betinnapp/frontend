import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import Modal from 'components/Modal'
import Text from 'components/Text'

import messages from './messages'

function DeleteModal(props) {
  const onCancelClick = () => {
    props.setOpenState(false)
  }

  const onConfirmClick = () => {
    props.deleteGoal(props.goalId)
    props.setOpenState(false)
  }

  return (
    <Modal
      open={props.open}
      onCancelClick={onCancelClick}
      onConfirmClick={onConfirmClick}
    >
      <Text medium>
        <FormattedMessage {...messages.doYouWantToDeleteThisGoal} />
      </Text>
    </Modal>
  )
}

DeleteModal.propTypes = {
  open: PropTypes.bool,
  setOpenState: PropTypes.func,
  deleteGoal: PropTypes.func,
  goalId: PropTypes.string,
}

export default DeleteModal
