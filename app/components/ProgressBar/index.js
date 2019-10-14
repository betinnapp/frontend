/**
 *
 * ProgressBar
 *
 */

import styled from 'styled-components'

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: #c4c4c4;
  border-radius: 8px;
  overflow: hidden;

  &:after {
    content: ' ';
    display: block;
    height: 4px;
    border-radius: 8px;
    background: #00dba1;
    width: ${props => props.percentage}%;
  }
`

export default ProgressBar
