/**
 *
 * WelcomePage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { selectUserFirstName } from 'containers/App/selectors'
import Button from 'components/Button'
import ContentWrapper from 'components/ContentWrapper'
import Icon from 'images/icon.svg'
import Text from 'components/Text'

import { fetchQuickModulesList } from './actions'
import messages from './messages'
import reducer from './reducer'
import saga from './saga'
import { selectModulesList } from './selectors'
import QuickModulesList from './QuickModulesList'

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

const QuickModulesListWrapper = styled.div`
  margin: 32px;
`

export function WelcomePage(props) {
  useInjectReducer({ key: 'welcomePage', reducer })
  useInjectSaga({ key: 'welcomePage', saga })

  useEffect(() => {
    props.fetchQuickModulesList()
  }, [])

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
      <QuickModulesListWrapper>
        <Text uppercase semi greyDark>
          <FormattedMessage {...messages.keepLearning} />
        </Text>
        <QuickModulesList modules={props.modules} />
      </QuickModulesListWrapper>
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
  fetchQuickModulesList: PropTypes.func.isRequired,
  modules: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
  userFirstName: selectUserFirstName,
  modules: selectModulesList,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchQuickModulesList: () => {
      dispatch(fetchQuickModulesList())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(WelcomePage)
