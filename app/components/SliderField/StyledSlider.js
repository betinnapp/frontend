/**
 *
 * StyledSlider
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'

const Wrapper = styled.div`
  .rc-slider-rail {
    background: #bababa;
  }

  .rc-slider-handle {
    width: 16px;
    height: 16px;
    background-color: #9657f6;
    border-color: #9657f6 !important;
    margin-top: -6px;

    &:active,
    &:hover {
      box-shadow: 0 0 5px #00dba1;
    }
  }

  .rc-slider-track {
    background-color: none;
    background-image: linear-gradient(45deg, #9657f6, #00dba1);
  }
`

function StyledSlider(props) {
  const { min } = props
  return (
    <Wrapper>
      <Slider
        min={min}
        max={props.max}
        value={props.value || min}
        onChange={props.onChange}
      />
    </Wrapper>
  )
}

StyledSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
}

StyledSlider.defaultProps = {
  min: 1,
  max: 240,
}

export default StyledSlider
