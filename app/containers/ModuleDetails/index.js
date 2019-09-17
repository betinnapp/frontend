/**
 *
 * ModuleDetails
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { SUBMODULE_DETAILS_PATH } from 'containers/App/urls'
import CardItem from 'components/CardItem'
import ContentWrapper from 'components/ContentWrapper'
import Loader from 'components/Loader'

import {
  makeSelectModuleDetails,
  makeSelectModuleDetailsIsLoading,
} from './selectors'
import { fetchModuleDetails } from './actions'
import reducer from './reducer'
import saga from './saga'

export function ModuleDetails(props) {
  useInjectReducer({ key: 'moduleDetails', reducer })
  useInjectSaga({ key: 'moduleDetails', saga })

  const {
    match: {
      params: { moduleId },
    },
    moduleDetails: { submodule = [] },
  } = props

  useEffect(() => {
    props.fetchModuleDetails(moduleId)
  }, [])

  const onCardClickHandler = id => {
    const url = SUBMODULE_DETAILS_PATH.replace(':moduleId', moduleId).replace(
      ':submoduleId',
      id,
    )
    props.history.push(url)
  }

  return (
    <ContentWrapper fullHeight>
      <Loader isLoading={props.isLoading}>
        <ContentWrapper flexbox flexWrap="wrap" justifyContent="space-around">
          {submodule.map(moduleItem => (
            <CardItem
              key={moduleItem.id}
              {...moduleItem}
              onClick={onCardClickHandler}
            />
          ))}
        </ContentWrapper>
      </Loader>
    </ContentWrapper>
  )
}

ModuleDetails.propTypes = {
  moduleDetails: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  fetchModuleDetails: PropTypes.func,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  moduleDetails: makeSelectModuleDetails,
  isLoading: makeSelectModuleDetailsIsLoading,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchModuleDetails: id => {
      dispatch(fetchModuleDetails(id))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(ModuleDetails)
