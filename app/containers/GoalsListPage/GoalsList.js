import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import round from 'lodash/round'

import history from 'utils/history'
import { GOAL_DETAILS_PATH } from 'containers/App/urls'
import ContentWrapper from 'components/ContentWrapper'
// import DoneIcon from 'components/DoneIcon'
import ProgressBar from 'components/ProgressBar'
import SmallCardContainer from 'components/SmallCardContainer'
import Text from 'components/Text'

import messages from './messages'

const Wrapper = styled.div`
  margin: 30px;
  text-align: center;

  .content {
    margin-top: 38px;
  }

  .cardFooter {
    width: 100%;
    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
`

function GoalsList(props) {
  const onClickHandler = id => {
    const url = GOAL_DETAILS_PATH.replace(':goalId?', id)
    history.push(url)
  }

  const renderCurrency = value => (
    <FormattedNumber
      value={value}
      style="currency" // eslint-disable-line react/style-prop-object
      currency="BRL"
    />
  )

  const renderGoalCard = goal => {
    const percentage = round(((100 * goal.balance) / goal.goal), 2)

    return (
      <SmallCardContainer
        key={goal.id}
        onClick={() => onClickHandler(goal.id)}
      >
        <ContentWrapper
          flexbox
          flexDirection="column"
          justifyContent="space-between"
          alignItems="start"
        >
          <Text small bold>
            {goal.name}
          </Text>
          <ProgressBar percentage={percentage} />
          <div className="cardFooter">
            <Text small bold greyDark className="left">
              <FormattedMessage
                {...messages.quantityOfTotal}
                values={{
                  quantity: renderCurrency(goal.balance),
                  total: renderCurrency(goal.goal),
                }}
              />
            </Text>
            <Text small bold greyDark className="right">
              {`${percentage}%`}
            </Text>
          </div>
        </ContentWrapper>
      </SmallCardContainer>
    )
  }

  return (
    <Wrapper>
      <Text uppercase big bold greyDark>
        <FormattedMessage {...messages.myGoals} />
      </Text>
      <div className="content">
        {props.goalsList.map(renderGoalCard)}
      </div>
    </Wrapper>
  )
}

GoalsList.propTypes = {
  goalsList: PropTypes.array.isRequired,
}

export default GoalsList
