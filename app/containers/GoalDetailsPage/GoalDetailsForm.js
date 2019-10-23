import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'
import isEmpty from 'lodash/isEmpty'

import Button from 'components/Button'
import CurrencyField from 'components/CurrencyField'
import InvestmentPreview from 'components/InvestmentPreview'
import Loader from 'components/Loader'

import DeleteModal from './DeleteModal'
import messages from './messages'

const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 980px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const goalFormShape = yup.object().shape({
  currentDeposit: yup.number().required(messages.required),
})

function GoalDetailsForm(props) {
  const [open, setOpen] = useState(false)

  const { goal, isLoading } = props
  const { investmentType = {} } = goal
  const investmentPreview = {
    header: [
      {
        id: 'goalName',
        label: messages.goalName,
        value: goal.name,
        bigValue: true,
      },
      {
        id: 'netTotal',
        label: messages.netTotal,
        value: goal.balance,
        type: 'currency',
        bigValue: true,
        green: true,
      },
    ],
    fields: [
      {
        id: 'goal',
        label: messages.goal,
        value: goal.goal,
        type: 'currency',
      },
      {
        id: 'depositedTotal',
        label: messages.depositedTotal,
        value: goal.depositTotal,
        type: 'currency',
      },
      {
        id: 'interestEarnedInThePeriod',
        label: messages.interestEarnedInThePeriod,
        value: goal.profit,
        type: 'currency',
        prefix: '+',
      },
      {
        id: 'totalTax',
        label: messages.totalTax,
        value: goal.tax,
        type: 'currency',
        prefix: '-',
      },
      {
        id: 'investmentType',
        label: messages.investmentType,
        value: `${investmentType.name} (${investmentType.interestRate}% a.a)`,
      },
    ],
  }

  const handleDeleteGoal = () => {
    setOpen(true)
  }

  return (
    <Loader isLoading={isLoading}>
      <DeleteModal
        open={open}
        goalId={goal.id}
        deleteGoal={props.deleteGoal}
        setOpenState={setOpen}
      />
      <Formik
        initialValues={{
          currentDeposit: goal.monthlyDeposit || '',
        }}
        validationSchema={goalFormShape}
        validateOnBlur={false}
        onSubmit={({ currentDeposit }, { setSubmitting }) => {
          props.updateGoal(goal.id, currentDeposit)
          setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            {!isEmpty(goal) && <InvestmentPreview {...investmentPreview} />}
            <div>
              <CurrencyField
                id="currentDeposit"
                name="currentDeposit"
                label={messages.depositValue}
                min={null}
              />
            </div>
            <div className="bt-text-align-center">
              <div>
                <Button
                  type="submit"
                  id="updateGoal"
                  disabled={isSubmitting}
                  small
                >
                  <FormattedMessage {...messages.save} />
                </Button>
              </div>
              <div>
                <Button
                  id="deleteGoal"
                  onClick={handleDeleteGoal}
                  small
                  red
                >
                  <FormattedMessage {...messages.deleteGoal} />
                </Button>
              </div>
            </div>
          </StyledForm>
        )}
      </Formik>
    </Loader>
  )
}

GoalDetailsForm.propTypes = {
  goal: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  updateGoal: PropTypes.func.isRequired,
  deleteGoal: PropTypes.func.isRequired,
}

export default GoalDetailsForm
