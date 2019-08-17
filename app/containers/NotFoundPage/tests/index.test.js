import React from 'react'
import { renderWithIntl } from 'utils/testHelpers'

import NotFoundPage from '../index'

describe('<NotFoundPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderWithIntl(<NotFoundPage />)
    expect(firstChild).toMatchSnapshot()
  })
})
