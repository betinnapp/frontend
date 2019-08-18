/**
 *
 * Tests for Slogan
 *
 */

import React from 'react'
import { renderWithIntl } from 'utils/testHelpers'

import Slogan from '../index'

describe('<Slogan />', () => {
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderWithIntl(<Slogan />)
    expect(firstChild).toMatchSnapshot()
  })
})
