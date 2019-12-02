/**
 *
 * ModulesListPage
 *
 */

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { HOME_PATH } from 'containers/App/urls'
import CardItem from 'components/CardItem'
import ContentWithHeader from 'components/ContentWithHeader'
import ContentWrapper from 'components/ContentWrapper'
import Loader from 'components/Loader'

import { fetchModulesList } from './actions'
import {
  selectModulesList,
  selectModulesListError,
  selectModulesListIsLoading,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'
import ModuleInfo from './ModuleInfo'

const ContentWithHeaderWrapper = styled(ContentWithHeader)`
  /* position: relative; */
`
const CardsWrapper = styled(ContentWrapper)`
  margin: 0 16px;
`

export function ModulesListPage(props) {
  useInjectReducer({ key: 'modulesListPage', reducer })
  useInjectSaga({ key: 'modulesListPage', saga })

  const [showModuleInfo, setShowModuleInfo] = useState(false)
  const [moduleInfo, setModuleInfo] = useState({})

  useEffect(() => {
    props.fetchModulesList()
  }, [])

  const onCardClickHandler = id => {
    setShowModuleInfo(true)
    const selectedModule = props.modules.find(mod => mod.id === id)
    setModuleInfo(selectedModule)
  }

  const handleCloseModuleInfo = () => {
    setShowModuleInfo(false)
    setModuleInfo({})
  }

  return (
    <ContentWithHeaderWrapper backTo={HOME_PATH}>
      <Loader isLoading={props.isLoading}>
        {props.error ? (
          <FormattedMessage {...messages.unableToLoadModulesList} />
        ) : (
          <CardsWrapper
            flexbox
            flexWrap="wrap"
            justifyContent="space-around"
          >
            {props.modules.map(moduleItem => (
              <CardItem
                key={moduleItem.id}
                {...moduleItem}
                onClick={onCardClickHandler}
              />
            ))}
          </CardsWrapper>
        )}
        {showModuleInfo && (
          <ModuleInfo
            visible={showModuleInfo}
            moduleInfo={moduleInfo}
            handleClose={handleCloseModuleInfo}
          />
        )}
      </Loader>
    </ContentWithHeaderWrapper>
  )
}

ModulesListPage.propTypes = {
  fetchModulesList: PropTypes.func,
  modules: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  modules: selectModulesList,
  isLoading: selectModulesListIsLoading,
  error: selectModulesListError,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchModulesList: () => {
      dispatch(fetchModulesList())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(ModulesListPage)
