/**
 *
 * Text
 *
 */

import styled from 'styled-components'

const Text = styled.p`
  margin: 0;
  font-weight: ${props => (props.bold && 'bold') || (props.semiBold && '600')};
  font-size: ${props => (props.big && '20px') || '1em'};
  color: ${props => (props.secondary && '#bababa') || '#000'};
`

export default Text
