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

import reducer from './reducer'
import saga from './saga'
import {
  selectInvestimentTypes,
  selectInvestimentTypesIsLoading,
} from './selectors'
import { fetchInvestimentTypes } from './actions'
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
`

const initialValues = {
  investimentType: '',
  duration: 0,
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
          onSubmit={() => {}}
        >
          {({ values }) => (
            <StyledForm>
              <InvestimentPreview
                values={values}
                investimentTypes={props.investimentTypes}
              />
              <div>
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
                  id="monthlyDeposit"
                  name="monthlyDeposit"
                  label={messages.monthlyDeposit}
                />
              </div>
              <div>
                {/* TODO: Save goal button */}
              </div>
            </StyledForm>
          )}
        </Formik>
      </div>
    </ContentWrapper>
  )
}

GoalDetailsPage.propTypes = {
  fetchInvestimentTypes: PropTypes.func,
  investimentTypes: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
  investimentTypes: selectInvestimentTypes,
  investimentTypesIsLoading: selectInvestimentTypesIsLoading,
})

function mapDispatchToProps(dispatch) {
  return {
    fetchInvestimentTypes: () => {
      dispatch(fetchInvestimentTypes())
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(GoalDetailsPage)
