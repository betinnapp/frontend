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
  selectInvestimentTypes,
  selectInvestimentTypesIsLoading,
  selectInvestimentTypesOptions,
} from './selectors'
import { fetchInvestimentTypes, saveGoal } from './actions'
import messages from './messages'
import InvestimentPreview from './InvestimentPreview'

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
  investimentType: '',
  duration: '',
  name: '',
  depositTotal: '',
  monthlyDeposit: '',
}

const goalFormShape = yup.object().shape({
  investimentType: yup.string().required(messages.required),
  duration: yup.string().required(messages.required),
  name: yup.string().required(messages.required),
  depositTotal: yup.string().required(messages.required),
  monthlyDeposit: yup.string().required(messages.required),
})

export function GoalDetailsPage(props) {
  useInjectReducer({ key: 'goalDetailsPage', reducer })
  useInjectSaga({ key: 'goalDetailsPage', saga })

  useEffect(() => {
    props.fetchInvestimentTypes()
  }, [])

  const { investimentTypes } = props

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
            const selectedInvestiment = investimentTypes.find(type => type.id === values.investimentType) || {}

            return (
              <StyledForm>
                <InvestimentPreview
                  values={values}
                  investimentType={selectedInvestiment}
                />
                <div>
                  <SelectField
                    label={messages.investimentType}
                    id="investimentType"
                    name="investimentType"
                    options={props.investimentTypesOptions}
                  />
                  <NumberField
                    id="duration"
                    name="duration"
                    label={messages.investimentTime}
                    min={selectedInvestiment.minInvestmentMonthTime}
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
  fetchInvestimentTypes: PropTypes.func,
  investimentTypes: PropTypes.array,
  investimentTypesOptions: PropTypes.array,
  saveGoal: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  investimentTypes: selectInvestimentTypes,
  investimentTypesIsLoading: selectInvestimentTypesIsLoading,
  investimentTypesOptions: selectInvestimentTypesOptions,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchInvestimentTypes: () => {
      dispatch(fetchInvestimentTypes())
    },
    saveGoal: values => {
      dispatch(saveGoal(values))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(GoalDetailsPage)
