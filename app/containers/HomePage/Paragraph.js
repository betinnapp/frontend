import styled from 'styled-components'

const Paragraph = styled.p`
  line-height: 60px;
  margin: 0;
  font-weight: ${props => props.bold && 'bold'};
  font-size: ${props => (props.fontSize && `${props.fontSize}px`) || '1em'};
`

export default Paragraph
