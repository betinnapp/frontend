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
  grid-template-columns: minmax(0, 1fr);
  overflow: hidden;

  > *:not(:first-child) {
    margin: 0 auto;
    width: 100%;
    max-width: 1080px;
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
