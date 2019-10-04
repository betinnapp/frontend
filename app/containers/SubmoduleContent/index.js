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
import { FormattedMessage } from 'react-intl'

import { useInjectSaga } from 'utils/injectSaga'
import { setSelectedId } from 'containers/App/actions'
import Button from 'components/Button'
import ContentWithBanner from 'components/ContentWithBanner'
import Text from 'components/Text'

import { fetchSubmoduleContent } from './actions'
import {
  selectSubmoduleContent,
  selectSubmoduleContentIsLoading,
} from './selectors'
import messages from './messages'
import saga from './saga'

const Content = styled.div`
  text-align: justify;

  img {
    width: 100%;
  }
`
const QuizArea = styled.div`
  text-align: center;
`

export function SubmoduleContent(props) {
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

  const startQuizOnClickHandler = () => {
    props.setQuizId(props.submodule.quizId)
    props.history.push(`${props.match.url}/quiz`)
  }

  return (
    <ContentWithBanner
      isLoading={props.isLoading}
      image={submodule.image}
    >
      <Content>
        <Text huge bold>
          {submodule.name}
        </Text>
        {/* TODO: Found a better solution to render html coming from backend? */}
        <div // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: submodule.content }}
        />
        <QuizArea>
          <Button
            id="startQuiz"
            onClick={startQuizOnClickHandler}
          >
            <FormattedMessage {...messages.startQuiz} />
          </Button>
        </QuizArea>
      </Content>
    </ContentWithBanner>
  )
}

SubmoduleContent.propTypes = {
  submodule: PropTypes.object,
  isLoading: PropTypes.bool,
  match: PropTypes.object,
  history: PropTypes.object,
  fetchSubmoduleContent: PropTypes.func,
  setQuizId: PropTypes.func,
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
    setQuizId: quizId => {
      dispatch(setSelectedId('quizId', quizId))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

export default compose(withConnect)(SubmoduleContent)
