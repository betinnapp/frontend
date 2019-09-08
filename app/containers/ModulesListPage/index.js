/**
 *
 * ModulesListPage
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
import { SUBMODULES_PATH } from 'containers/App/urls'
import CardItem from 'components/CardItem'
import history from 'utils/history'

import { fetchModulesList } from './actions'
import {
  selectModulesList,
  selectModulesListError,
  selectModulesListIsLoading,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

const ModulesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export function ModulesListPage(props) {
  useInjectReducer({ key: 'modulesListPage', reducer })
  useInjectSaga({ key: 'modulesListPage', saga })

  useEffect(() => {
    props.fetchModulesList()
  }, [])

  const onCardClickHandler = id => {
    const url = SUBMODULES_PATH.replace(':id', id)
    history.push(url)
  }

  return (
    <div>
      {props.error && (
        <FormattedMessage {...messages.unableToLoadModulesList} />
      )}
      <ModulesWrapper>
        {!props.error &&
          props.modules.map(moduleItem => (
            <CardItem
              key={moduleItem.id}
              {...moduleItem}
              onClick={onCardClickHandler}
            />
          ))}
      </ModulesWrapper>
    </div>
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
