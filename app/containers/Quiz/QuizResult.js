import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import Button from 'components/Button'
import Text from 'components/Text'
import AchievementStair from 'images/achievementStair.png'

import messages from './messages'

const Wrapper = styled.div`
  flex: auto;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;
`

function QuizResult(props) {
  return (
    <Wrapper>
      <div>
        <Text medium bold>
          <FormattedMessage {...messages.quizFinishedContinueLearning} />
        </Text>
      </div>
      <div>
        <img src={AchievementStair} alt="Achievement Stair" />
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
      <div>
        <Button id="goBackToHomePage" onClick={props.completeSubmodule}>
          <FormattedMessage {...messages.continue} />
        </Button>
      </div>
    </Wrapper>
  )
}

QuizResult.propTypes = {
  correctAnswersCount: PropTypes.number.isRequired,
  questionsCount: PropTypes.number.isRequired,
  completeSubmodule: PropTypes.func.isRequired,
}

export default QuizResult
