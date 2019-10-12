/**
 *
 * GoalDetailsPage
 *
 */

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { FormattedMessage } from 'react-intl'
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { GOALS_LIST_PATH } from 'containers/App/urls'
import Button from 'components/Button'
import ContentWrapper from 'components/ContentWrapper'
import CurrencyField from 'components/CurrencyField'
import Header from 'components/Header'
import InputField from 'components/InputField'
import NumberField from 'components/NumberField'
import SelectField from 'components/SelectField'

import reducer from './reducer'
import saga from './saga'
import {
  selectInvestmentTypes,
  selectInvestmentTypesIsLoading,
  selectInvestmentTypesOptions,
  selectGoal,
  selectGoalIsLoading,
} from './selectors'
import { fetchInvestmentTypes, saveGoal, fetchGoal } from './actions'
import messages from './messages'
import InvestmentPreview from './InvestmentPreview'

const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 24px;
  max-width: 980px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .alignCenter {
    text-align: center;
  }
`

const initialValues = {
  investmentType: '',
  duration: '',
  name: '',
  depositTotal: '',
  monthlyDeposit: '',
}

const goalFormShape = yup.object().shape({
  investmentType: yup.string().required(messages.required),
  duration: yup.string().required(messages.required),
  name: yup.string().required(messages.required),
  depositTotal: yup.string().required(messages.required),
  monthlyDeposit: yup.string().required(messages.required),
})

export function GoalDetailsPage(props) {
  useInjectReducer({ key: 'goalDetailsPage', reducer })
  useInjectSaga({ key: 'goalDetailsPage', saga })

  useEffect(() => {
    const { match: { params: { goalId } } } = props

    if (goalId) {
      props.fetchGoal(goalId)
    } else {
      props.fetchInvestmentTypes()
    }
  }, [])

  const { investmentTypes } = props

  return (
    <ContentWrapper
      fullHeight
      grid
      gridTemplateRows={['auto', '1fr']}
    >
      <Header backTo={GOALS_LIST_PATH} />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={goalFormShape}
          validateOnBlur={false}
          onSubmit={(values, { setSubmitting }) => {
            props.saveGoal(values)
            setSubmitting(false)
          }}
        >
          {({ values, isSubmitting }) => {
            const selectedInvestment = investmentTypes.find(type => type.id === values.investmentType) || {}

            return (
              <StyledForm>
                <InvestmentPreview
                  values={values}
                  investmentType={selectedInvestment}
                />
                <div>
                  <SelectField
                    label={messages.investmentType}
                    id="investmentType"
                    name="investmentType"
                    options={props.investmentTypesOptions}
                  />
                  <NumberField
                    id="duration"
                    name="duration"
                    label={messages.investmentTime}
                    min={selectedInvestment.minInvestmentMonthTime}
                  />
                  <InputField
                    type="text"
                    id="name"
                    name="name"
                    label={messages.goalName}
                  />
                  <CurrencyField
                    id="depositTotal"
                    name="depositTotal"
                    label={messages.initialValue}
                  />
                  <CurrencyField
                    id="monthlyDeposit"
                    name="monthlyDeposit"
                    label={messages.monthlyDeposit}
                  />
                </div>
                <div className="alignCenter">
                  <Button
                    type="submit"
                    id="saveAsGoal"
                    disabled={isSubmitting}
                    small
                  >
                    <FormattedMessage {...messages.saveAsGoal} />
                  </Button>
                </div>
              </StyledForm>
            )
          }}
        </Formik>
      </div>
    </ContentWrapper>
  )
}

GoalDetailsPage.propTypes = {
  fetchInvestmentTypes: PropTypes.func,
  investmentTypes: PropTypes.array,
  investmentTypesOptions: PropTypes.array,
  saveGoal: PropTypes.func,
  fetchGoal: PropTypes.func,
  goal: PropTypes.object,
  goalIsLoading: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
  investmentTypes: selectInvestmentTypes,
  investmentTypesIsLoading: selectInvestmentTypesIsLoading,
  investmentTypesOptions: selectInvestmentTypesOptions,
  goal: selectGoal,
  goalIsLoading: selectGoalIsLoading,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchInvestmentTypes: () => {
      dispatch(fetchInvestmentTypes())
    },
    saveGoal: values => {
      dispatch(saveGoal(values))
    },
    fetchGoal: id => {
      dispatch(fetchGoal(id))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(GoalDetailsPage)
