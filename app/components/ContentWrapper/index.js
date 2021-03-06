import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const GridContent = css`
  display: grid;
  grid-template-rows: ${props => props.gridTemplateRows.join(' ')};
`
const FlexboxContent = css`
  display: flex;
  flex-wrap: ${props => props.flexWrap};
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.alignItems};
`
const FullHeight = css`
  height: 100%;
`
const NoLateralMargins = css`
  margin: auto -16px;
`

const ContentWrapper = styled.div`
  justify-content: ${props => props.justifyContent};

  ${props => props.grid && GridContent}
  ${props => props.flexbox && FlexboxContent}
  ${props => props.fullHeight && FullHeight}
  ${props => props.noLateralMargins && NoLateralMargins}
`

ContentWrapper.propTypes = {
  grid: PropTypes.bool,
  fullHeight: PropTypes.bool,
  noLateralMargins: PropTypes.bool,
  gridTemplateRows: PropTypes.array,
}

export default ContentWrapper
