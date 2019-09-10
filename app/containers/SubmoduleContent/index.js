/**
 *
 * SubmoduleContent
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
import { fetchSubmoduleContent } from './actions'
import makeSelectSubmoduleContent from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

export function SubmoduleContent(props) {
  useInjectReducer({ key: 'submoduleContent', reducer })
  useInjectSaga({ key: 'submoduleContent', saga })

  useEffect(() => {
    const {
      match: {
        params: { moduleId, submoduleId },
      },
    } = props
    props.fetchSubmoduleContent(moduleId, submoduleId)
  }, [])

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  )
}

SubmoduleContent.propTypes = {
  fetchSubmoduleContent: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  submoduleContent: makeSelectSubmoduleContent(),
})

function mapDispatchToProps(dispatch) {
  return {
    fetchSubmoduleContent: (moduleId, submoduleId) => {
      dispatch(fetchSubmoduleContent(moduleId, submoduleId))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(SubmoduleContent)
