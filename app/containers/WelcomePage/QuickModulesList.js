import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

import history from 'utils/history'
import { MODULE_DETAILS_PATH } from 'containers/App/urls'
import { StatusType } from 'containers/App/enums'
import SmallCardContainer from 'components/SmallCardContainer'
import Text from 'components/Text'

import messages from './messages'

function QuickModulesList(props) {
  const renderModuleStatus = moduleItem => {
    const { status, submodule = [] } = moduleItem

    if (status === StatusType.COMPLETED) {
      return 'OK'
    }

    const completedSubmodulesLength = (submodule || []).filter(
      subItem => subItem.status === StatusType.COMPLETED,
    ).length

    return (
      <Text bold medium greyDark>
        {`${completedSubmodulesLength}/${submodule.length}`}
      </Text>
    )
  }

  const onClickHandler = id => {
    const url = MODULE_DETAILS_PATH.replace(':moduleId', id)
    history.push(url)
  }

  return (
    <div>
      <Text uppercase semi greyDark>
        <FormattedMessage {...messages.keepLearning} />
      </Text>
      {props.modules.map(moduleItem => (
        <SmallCardContainer
          key={moduleItem.id}
          onClick={() => onClickHandler(moduleItem.id)}
        >
          <Text bold>
            {moduleItem.name}
          </Text>
          {renderModuleStatus(moduleItem)}
        </SmallCardContainer>
      ))}
    </div>
  )
}

QuickModulesList.propTypes = {
  modules: PropTypes.array.isRequired,
}

export default QuickModulesList
