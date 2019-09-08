/**
 *
 * ModulesListPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'

import { fetchModulesList } from './actions'
import {
  selectModulesList,
  selectModulesListError,
  selectModulesListIsLoading,
} from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

export function ModulesListPage(props) {
  useInjectReducer({ key: 'modulesListPage', reducer })
  useInjectSaga({ key: 'modulesListPage', saga })

  useEffect(() => {
    props.fetchModulesList()
  }, [])

  return (
    <div>
      {props.error && (
        <FormattedMessage {...messages.unableToLoadModulesList} />
      )}
    </div>
  )
}

ModulesListPage.propTypes = {
  fetchModulesList: PropTypes.func,
  modules: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.node,
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
