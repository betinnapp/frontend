/**
 *
 * SubmoduleContent
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import ContentWrapper from 'components/ContentWrapper'
import Loader from 'components/Loader'
import Text from 'components/Text'

import { fetchSubmoduleContent } from './actions'
import {
  selectSubmoduleContent,
  selectSubmoduleContentIsLoading,
} from './selectors'
import reducer from './reducer'
import saga from './saga'

const Banner = styled.div`
  width: 100%;
  height: 216px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`
const Content = styled.div`
  text-align: justify;
  margin-top: -20px;
  padding: 8px;
  border-radius: 20px;
  background-color: #e6e6e6;

  img {
    width: 100%;
  }
`

export function SubmoduleContent(props) {
  useInjectReducer({ key: 'submoduleContent', reducer })
  useInjectSaga({ key: 'submoduleContent', saga })

  const { submodule } = props

  useEffect(() => {
    const {
      match: {
        params: { moduleId, submoduleId },
      },
    } = props
    props.fetchSubmoduleContent(moduleId, submoduleId)
  }, [])

  return (
    <ContentWrapper fullHeight noLateralMargins>
      <Loader isLoading={props.isLoading}>
        <Banner img={submodule.image} />
        <Content>
          <Text huge bold>
            {submodule.name}
          </Text>
          {/* TODO: Found a better solution to render html coming from backend? */}
          <div // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: submodule.content }}
          />
        </Content>
      </Loader>
    </ContentWrapper>
  )
}

SubmoduleContent.propTypes = {
  submodule: PropTypes.object,
  isLoading: PropTypes.bool,
  fetchSubmoduleContent: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  submodule: selectSubmoduleContent,
  isLoading: selectSubmoduleContentIsLoading,
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
