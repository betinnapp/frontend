/**
 *
 * Text
 *
 */

import styled from 'styled-components'

const Text = styled.p`
  margin: 0;
  font-weight: ${props => props.bold && 'bold'};
  font-size: ${props => (props.big && '20px') || '1em'};
`

export default Text
