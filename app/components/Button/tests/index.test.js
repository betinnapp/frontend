/**
 *
 * Tests for Button
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react'
import { render } from 'react-testing-library'

import Button from '../index'

describe('<Button />', () => {
  const localProps = {
    id: 'id123',
    onClick: () => {},
  }

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Button {...localProps}>Test</Button>)
    expect(firstChild).toMatchSnapshot()
  })
})
