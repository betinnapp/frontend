import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import ReadOnlyField from 'components/ReadOnlyField'

const Wrapper = styled.div`
  text-align: center;
  .header {
    border-bottom: 2px solid #efefef;
  }
`

export function InvestmentPreview(props) {
  return (
    <Wrapper>
      <div className="header">
        {props.header.map(field => (
          <ReadOnlyField key={field.id} {...field} />
        ))}
      </div>
      {props.fields.map(field => (
        <ReadOnlyField key={field.id} {...field} />
      ))}
    </Wrapper>
  )
}

InvestmentPreview.propTypes = {
  header: PropTypes.array.isRequired,
  fields: PropTypes.array.isRequired,
}

export default InvestmentPreview
