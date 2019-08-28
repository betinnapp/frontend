/**
 *
 * Notifications
 *
 */

import PropTypes from 'prop-types'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styled from 'styled-components'

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
const renderNotificationItem = (item = {}) =>
  console.log(item) || (
    <NotificationItem feedback={item.level}>
      <FormattedMessage {...item.message} />
    </NotificationItem>
  )

export function Notifications({ notifications }) {
  return <Wrapper>{notifications.map(renderNotificationItem)}</Wrapper>
}

Notifications.propTypes = {
  notifications: PropTypes.array,
}

const mapStateToProps = state => ({
  notifications: state.notifications || [],
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
