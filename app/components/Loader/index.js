/**
 *
 * Loader
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LoaderGif from 'images/loader.gif'

const LoaderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

function Loader({ isLoading, children }) {
  return isLoading ? (
    <LoaderIcon>
      <img src={LoaderGif} alt="Loader" />
    </LoaderIcon>
  ) : (
    children
  )
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node,
}

export default Loader
