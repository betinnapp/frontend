import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGoalDetailsPageDomain = state => state.goalDetailsPage || initialState

const selectInvestmentTypesState = createSelector(
  selectGoalDetailsPageDomain,
  substate => substate.investmentTypes
)

const selectInvestmentTypes = createSelector(
  selectInvestmentTypesState,
  substate => substate.resource
)

const selectInvestmentTypesIsLoading = createSelector(
  selectInvestmentTypesState,
  substate => substate.isLoading
)

const selectInvestmentTypesOptions = createSelector(
  selectInvestmentTypes,
  substate => substate.map(option => ({
    value: option.id,
    label: `${option.name} (${option.interestRate}% a.a)`,
  }))
)

export {
  selectInvestmentTypes,
  selectInvestmentTypesIsLoading,
  selectInvestmentTypesOptions,
}
