import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import { HOME_PATH } from 'containers/App/urls'
import Button from 'components/Button'
import Text from 'components/Text'

import messages from './messages'

const Wrapper = styled.div`
`

function QuizResult(props) {
  return (
    <Wrapper>
      <div>
        <Text huge bold>
          <FormattedMessage {...messages.submoduleFinished} />
        </Text>
        <Text>
          <FormattedMessage {...messages.quizFinishedContinueLearning} />
        </Text>
      </div>
      <div>
        <Text terciary medium bold>
          <FormattedMessage
            {...messages.answersResult}
            values={{
              correctAnswersCount: props.correctAnswersCount,
              questionsCount: props.questionsCount,
            }}
          />
        </Text>
      </div>
      <Button id="goBackToHomePage" link={HOME_PATH}>
        <FormattedMessage {...messages.continue} />
      </Button>
    </Wrapper>
  )
}

QuizResult.propTypes = {
  correctAnswersCount: PropTypes.number.isRequired,
  questionsCount: PropTypes.number.isRequired,
}

export default QuizResult
