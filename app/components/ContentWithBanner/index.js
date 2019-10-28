/**
 *
 * ContentWithBanner
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BackButton from 'components/BackButton'
import ContentWrapper from 'components/ContentWrapper'
import Loader from 'components/Loader'

const Banner = styled.div`
  width: 100%;
  height: ${props => (props.miniBanner ? '132px' : '216px')};
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`
const Content = styled.div`
  display: flex;
  flex-flow: column;
  margin: -20px auto 0;
  padding: 16px 16px 0;
  border-radius: 20px 20px 0 0;
  background-color: #e6e6e6;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 980px;
`

function ContentWithBanner(props) {
  const { children, image, isLoading, miniBanner } = props

  return (
    <ContentWrapper
      grid
      gridTemplateRows={['auto', '1fr']}
      fullHeight
      noLateralMargins
    >
      <Loader isLoading={isLoading}>
        <Banner image={image} miniBanner={miniBanner}>
          {props.withBack && (<BackButton white />)}
        </Banner>
        <Content>{children}</Content>
      </Loader>
    </ContentWrapper>
  )
}

ContentWithBanner.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  isLoading: PropTypes.bool,
  miniBanner: PropTypes.bool,
  withBack: PropTypes.bool,
}

export default ContentWithBanner
