/**
 *
 * ContentWithBanner
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ContentWrapper from 'components/ContentWrapper'
import Loader from 'components/Loader'

const Banner = styled.div`
  width: 100%;
  height: ${props => props.miniBanner ? '132px' : '216px'};
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`
const Content = styled.div`
  margin-top: -20px;
  padding: 8px;
  border-radius: 20px;
  background-color: #e6e6e6;
`

function ContentWithBanner(props) {
  const {
    children,
    image,
    isLoading,
    miniBanner,
    ...rest
  } = props

  return (
    <ContentWrapper
      {...rest}
      fullHeight
      noLateralMargins
    >
      <Loader isLoading={isLoading}>
        <Banner image={image} miniBanner={miniBanner} />
        <Content>
          {children}
        </Content>
      </Loader>
    </ContentWrapper>
  )
}

ContentWithBanner.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  isLoading: PropTypes.bool,
  miniBanner: PropTypes.bool,
}

export default ContentWithBanner
