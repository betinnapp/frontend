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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import history from 'utils/history'
import { MODULES_PATH, GOALS_LIST_PATH, USER_PATH } from 'containers/App/urls'
import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { selectUserFirstName } from 'containers/App/selectors'
import Button from 'components/Button'
import ContentWrapper from 'components/ContentWrapper'
import Loader from 'components/Loader'
import Text from 'components/Text'

import { fetchQuickModulesList, fetchCoins } from './actions'
import messages from './messages'
import reducer from './reducer'
import saga from './saga'
import { selectModulesList, selectModulesListIsLoading, selectModulesListError } from './selectors'
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

    > * {
      margin-top: 16px;
    }
  }
`

const UserIcon = styled(FontAwesomeIcon)`
  color: #000;
  cursor: pointer;
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

  const handleUserIconClick = () => {
    history.push(USER_PATH)
  }

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
        <UserIcon
          icon="user-circle"
          size="3x"
          onClick={handleUserIconClick}
        />
      </div>
      <QuickModulesListWrapper>
        <Loader isLoading={props.isLoading}>
          {!props.error ?
            <QuickModulesList modules={props.modules} /> : (
              <Text bold>
                <FormattedMessage {...messages.anErrorOccurredWhileLoadingModules} />
              </Text>
            )}
        </Loader>
      </QuickModulesListWrapper>
      <div className="footer">
        <div>
          <Button id="seeAvailableModules" link={MODULES_PATH} small>
            <FormattedMessage {...messages.seeAvailableModules} />
          </Button>
        </div>
        <div>
          <Button id="seeGoalsList" link={GOALS_LIST_PATH} small>
            <FormattedMessage {...messages.seeGoals} />
          </Button>
        </div>
      </div>
    </Wrapper>
  )
}

WelcomePage.propTypes = {
  userFirstName: PropTypes.string,
  fetchQuickModulesList: PropTypes.func.isRequired,
  modules: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  fetchCoins: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  userFirstName: selectUserFirstName,
  modules: selectModulesList,
  isLoading: selectModulesListIsLoading,
  error: selectModulesListError,
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
