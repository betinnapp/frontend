/**
 *
 * Notifications
 *
 */

import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styled from 'styled-components'
import { useTransition, animated, config } from 'react-spring'

const Wrapper = styled.div`
  position: absolute;
  width: 312px;
  top: 128px;
  left: 0;
  right: 0;
  margin: 0 auto;
`

const NotificationItem = styled(animated.div)`
  display: flex;
  min-height: 38px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 8px;
  background: ${({ feedback }) =>
    (feedback === 'warning' && '#f2994a') ||
    (feedback === 'good' && '#6fcf97') ||
    '#a3a3a3'};
`

function Notification({ level, message, onDismiss, style }) {
  return (
    <NotificationItem
      feedback={level}
      style={style}
      onClick={e => {
        e.preventDefault()

        if (onDismiss) {
          onDismiss()
        }
      }}
    >
      <FormattedMessage {...message} />
    </NotificationItem>
  )
}

Notification.propTypes = {
  level: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
  onDismiss: PropTypes.func,
  style: PropTypes.object.isRequired,
}

Notification.defaultProps = {
  onDismiss: () => {},
}

export function Notifications({ notifications }) {
  const [cancelMap] = useState(() => new WeakMap())
  const [notification, setNotification] = useState([])

  const transitions = useTransition(notification, item => item.uid, {
    from: { opacity: 0 },

    enter: () => async next => await next({ opacity: 1 }),

    leave: item => async (next, cancel) => {
      cancelMap.set(item, cancel)

      await next({ opacity: 0 })
    },

    onRest: item =>
      setNotification(state => state.filter(i => i.uid !== item.uid)),

    config: (item, state) => ({
      ...config.stiff,
      duration: state === 'leave' ? item.autoDismiss : undefined,
    }),
  })

  useEffect(() => setNotification(notifications.splice(-1)), [notifications])

  return (
    <Wrapper>
      {transitions.map(({ key, item, props: { ...style } }) => (
        <Notification
          key={key}
          style={style}
          onDismiss={() => {
            if (cancelMap.has(item)) {
              cancelMap.get(item)()
            }
          }}
          {...item}
        />
      ))}
    </Wrapper>
  )
}

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
}

const enhance = compose(
  connect(state => ({
    notifications: state.notifications || [],
  })),
)

export default enhance(Notifications)