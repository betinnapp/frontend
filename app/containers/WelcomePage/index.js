/**
 *
 * WelcomePage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectUserFirstName } from 'containers/App/selectors'
import Button from 'components/Button'
import ContentWrapper from 'components/ContentWrapper'
import Icon from 'images/icon.svg'
import Text from 'components/Text'

import messages from './messages'

const Wrapper = styled(ContentWrapper)`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 32px;
    color: #767676;
    background-color: #fff;

    img {
      width: 45px;
    }
  }

  .footer {
    text-align: center;
    margin-bottom: 16px;
  }
`

export function WelcomePage(props) {
  return (
    <Wrapper
      grid
      fullHeight
      noLateralMargins
      gridTemplateRows={['80px', '1fr', 'auto']}
    >
      <div className="header">
        <Text bold medium>
          <FormattedMessage
            {...messages.welcomeUser}
            values={{ username: props.userFirstName }} // TODO: Use username from stored user
          />
        </Text>
        <img src={Icon} alt="User" />
      </div>
      <div>{/* TODO: Quick modules list */}</div>
      <div className="footer">
        <Button id="seeAvailableModules" link="/modules" small>
          <FormattedMessage {...messages.seeAvailableModules} />
        </Button>
      </div>
    </Wrapper>
  )
}

WelcomePage.propTypes = {
  userFirstName: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
  userFirstName: selectUserFirstName,
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

export default compose(withConnect)(WelcomePage)
