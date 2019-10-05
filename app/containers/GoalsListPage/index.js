/**
 *
 * GoalsListPage
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { HOME_PATH } from 'containers/App/urls'
import Button from 'components/Button'
import ContentWrapper from 'components/ContentWrapper'
import Header from 'components/Header'

import makeSelectGoalsListPage from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

const Wrapper = styled(ContentWrapper)`
  padding-bottom: 16px;
  .footer {
    text-align: center;
  }
`

export function GoalsListPage() {
  useInjectReducer({ key: 'goalsListPage', reducer })
  useInjectSaga({ key: 'goalsListPage', saga })

  return (
    <Wrapper
      fullHeight
      grid
      gridTemplateRows={['auto', '1fr', 'auto']}
      noLateralMargins
    >
      <Header backTo={HOME_PATH} />
      <div></div>
      <div className="footer">
        <Button id="makeSimulation" small>
          <FormattedMessage {...messages.makeSimulation} />
        </Button>
      </div>
    </Wrapper>
  )
}

GoalsListPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  goalsListPage: makeSelectGoalsListPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(GoalsListPage)
