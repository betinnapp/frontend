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
import { Formik, Form } from 'formik'
import * as yup from 'yup'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import { GOALS_LIST_PATH } from 'containers/App/urls'
import ContentWrapper from 'components/ContentWrapper'
import Header from 'components/Header'
import InputField from 'components/InputField'
import CurrencyField from 'components/CurrencyField'

import makeSelectGoalDetailsPage from './selectors'
import reducer from './reducer'
import saga from './saga'
import messages from './messages'

const StyledForm = styled(Form)`
  margin: 0 auto;
  padding: 0 24px;
  max-width: 980px;
`

const initialValues = {
  investimentType: '',
  duration: 0,
  name: '',
  depositTotal: '',
  monthlyIncome: '',
}

const goalFormShape = yup.object().shape({
  investimentType: yup.string().required(messages.required),
  duration: yup.string().required(messages.required),
  name: yup.string().required(messages.required),
  depositTotal: yup.string().required(messages.required),
  monthlyIncome: yup.string().required(messages.required),
})

export function GoalDetailsPage(props) {
  useInjectReducer({ key: 'goalDetailsPage', reducer })
  useInjectSaga({ key: 'goalDetailsPage', saga })

  useEffect(() => {
    props.fetchInvestimentTypes()
  }, [])

  return (
    <ContentWrapper
      fullHeight
      grid
      gridTemplateRows={['auto', '1fr', 'auto']}
    >
      <Header backTo={GOALS_LIST_PATH} />
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={goalFormShape}
          validateOnBlur={false}
          onSubmit={() => {}}
        >
          {() => (
            <StyledForm>
              <InputField
                type="text"
                id="investimentType"
                name="investimentType"
                label={messages.investimentType}
              />
              <InputField
                type="number"
                id="duration"
                name="duration"
                label={messages.investimentTime}
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
                id="monthlyIncome"
                name="monthlyIncome"
                label={messages.monthlyDeposit}
              />
            </StyledForm>
          )}
        </Formik>
      </div>
      <div>
        {/* TODO: Save goal button */}
      </div>
    </ContentWrapper>
  )
}

GoalDetailsPage.propTypes = {
  fetchInvestimentTypes: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  goalDetailsPage: makeSelectGoalDetailsPage(),
})

function mapDispatchToProps(dispatch) {
  return {
    fetchInvestimentTypes: () => {
      console.log('will fetch investiment types')
      dispatch()
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(GoalDetailsPage)
