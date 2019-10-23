/**
 *
 * ContentWithHeader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ContentWrapper from 'components/ContentWrapper'
import Header from 'components/Header'

const Wrapper = styled(ContentWrapper)`
  grid-template-columns: minmax(0, 980px);
  overflow: hidden;
  > *:not(:first-child) {
    overflow-y: auto;
  }
`

function ContentWithHeader(props) {
  const { backTo, children, ...rest } = props

  return (
    <Wrapper
      fullHeight
      grid
      gridTemplateRows={['auto', '1fr']}
      noLateralMargins
      justifyContent="center"
      {...rest}
    >
      <Header backTo={backTo} />
      {children}
    </Wrapper>
  )
}

ContentWithHeader.propTypes = {
  children: PropTypes.node,
  backTo: PropTypes.string.isRequired,
}

export default ContentWithHeader
