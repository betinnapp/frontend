/**
 *
 * SubmodulesList
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import CardItem from 'components/CardItem'
import ContentWrapper from 'components/ContentWrapper'

// import makeSelectSubmodulesList from './selectors'
import reducer from './reducer'
import saga from './saga'
// import messages from './messages'

export function SubmodulesList(props) {
  useInjectReducer({ key: 'submodulesList', reducer })
  useInjectSaga({ key: 'submodulesList', saga })

  useEffect(() => {
    // props.fetchModulesList()
  }, [])

  return (
    <ContentWrapper fullHeight>
      <ContentWrapper flexbox flexWrap="wrap" justifyContent="space-around">
        {props.submodules.map(moduleItem => (
          <CardItem
            key={moduleItem.id}
            {...moduleItem}
            // onClick={onCardClickHandler}
          />
        ))}
      </ContentWrapper>
    </ContentWrapper>
  )
}

SubmodulesList.propTypes = {
  submodules: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(SubmodulesList)
