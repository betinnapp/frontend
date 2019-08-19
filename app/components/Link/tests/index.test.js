/**
 *
 * Tests for Link
 *
 */

import React from 'react'
import { render } from 'react-testing-library'
import { BrowserRouter } from 'react-router-dom'

import Link from '../index'

describe('<Link />', () => {
  const defaultProps = {
    id: 'id123',
    to: '/test',
  }

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <BrowserRouter>
        <Link {...defaultProps}>Test</Link>
      </BrowserRouter>,
    )
    expect(firstChild).toMatchSnapshot()
  })
})
