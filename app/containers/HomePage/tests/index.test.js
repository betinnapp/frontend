import React from 'react'
import { renderWithIntl } from 'utils/testHelpers'

import HomePage from '../index'

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderWithIntl(<HomePage />)
    expect(firstChild).toMatchSnapshot()
  })
})
