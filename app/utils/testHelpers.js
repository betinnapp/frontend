import React from 'react'
import { render } from 'react-testing-library'
import { IntlProvider } from 'react-intl'

import ptTranslations from 'translations/pt.json'

export function renderWithIntl(component) {
  return render(
    <IntlProvider locale="pt" messages={ptTranslations}>
      {component}
    </IntlProvider>,
  )
}
