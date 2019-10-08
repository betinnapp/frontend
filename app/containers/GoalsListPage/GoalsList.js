import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import round from 'lodash/round'

import history from 'utils/history'
import { GOAL_DETAILS_PATH } from 'containers/App/urls'
import ContentWrapper from 'components/ContentWrapper'
import DoneIcon from 'components/DoneIcon'
import ProgressBar from 'components/ProgressBar'
import SmallCardContainer from 'components/SmallCardContainer'
import Text from 'components/Text'

import messages from './messages'

const Wrapper = styled.div`
  padding: 30px;
  overflow-y: overlay;
  text-align: center;

  .content {
    margin-top: 38px;
  }

  .cardTitle {
    margin-bottom: 8px;
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
const DoneIconWrapper = styled.div`
  position: absolute;
  top: -9px;
  right: -9px;
  font-size: 18px;
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
        {(percentage === 100 || goal.status === 'COMPLETED') && (
          <DoneIconWrapper>
            <DoneIcon className="xablau" />
          </DoneIconWrapper>
        )}
        <ContentWrapper
          flexbox
          flexDirection="column"
          justifyContent="space-between"
          alignItems="start"
        >
          <Text small bold className="cardTitle">
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
      <Text big bold greyDark>
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