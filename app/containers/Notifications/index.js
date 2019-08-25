/**
 *
 * Notifications
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'

import { useInjectReducer } from 'utils/injectReducer'
import makeSelectNotifications from './selectors'
import reducer from './reducer'

const Wrapper = styled.div`
  position: absolute;
  width: 312px;
  top: 128px;
  left: 0;
  right: 0;
  margin: 0 auto;
`

const NotificationItem = styled.div`
  min-height: 38px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 8px;
  background: ${({ feedback }) =>
    (feedback === 'warning' && '#f2994a') ||
    (feedback === 'good' && '#6fcf97') ||
    '#a3a3a3'};
`

export function Notifications({ notifications }) {
  useInjectReducer({ key: 'notifications', reducer })

  const renderNotificationItem = (item = {}) => (
    <NotificationItem feedback={item.feedback}>
      <FormattedMessage {...item.message} />
    </NotificationItem>
  )

  return (
    <Wrapper>
      {notifications.map(notification => renderNotificationItem(notification))}
      {/* {renderNotificationItem({ feedback: 'warning' })}
      {renderNotificationItem({ feedback: 'good' })}
      {renderNotificationItem()} */}
    </Wrapper>
  )
}

Notifications.propTypes = {
  notifications: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
  notifications: makeSelectNotifications(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(Notifications)
