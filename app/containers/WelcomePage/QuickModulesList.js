import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'

import history from 'utils/history'
import { MODULE_DETAILS_PATH } from 'containers/App/urls'
import { StatusType } from 'containers/App/enums'
import ContentWrapper from 'components/ContentWrapper'
import DoneIcon from 'components/DoneIcon'
import SmallCardContainer from 'components/SmallCardContainer'
import Text from 'components/Text'

import messages from './messages'

const StatusText = styled(Text)`
  text-align: right;
  min-width: 30px;
`
const ModuleText = styled(Text)`
  text-align: left;
`

function QuickModulesList(props) {
  const renderModuleStatus = moduleItem => {
    const { status, submodule = [] } = moduleItem

    if (status === StatusType.COMPLETED) {
      return <DoneIcon />
    }

    const completedSubmodulesLength = (submodule || []).filter(
      subItem => subItem.status === StatusType.COMPLETED,
    ).length

    return (
      <StatusText bold medium greyDark>
        {`${completedSubmodulesLength}/${submodule.length}`}
      </StatusText>
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
          <ContentWrapper
            flexbox
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <ModuleText bold>
              {moduleItem.name}
            </ModuleText>
            {renderModuleStatus(moduleItem)}
          </ContentWrapper>
        </SmallCardContainer>
      ))}
    </div>
  )
}

QuickModulesList.propTypes = {
  modules: PropTypes.array.isRequired,
}

export default QuickModulesList
