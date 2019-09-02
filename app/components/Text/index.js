/**
 *
 * Text
 *
 */

import styled, { css } from 'styled-components'

const BoldText = css`
  font-weight: bold;
  font-family: 'Poppings', sans-serif;
`

const SemiBoldText = css`
  font-weight: 600;
`

const SecondaryText = css`
  color: #bababa;
`

const BigText = css`
  font-size: 20px;
`

const Text = styled.p`
  margin: 0;

  font-size: 1em;
  color: #000000;

  ${props => props.big && BigText}
  ${props => props.bold && BoldText}
  ${props => props.semiBold && SemiBoldText}
  ${props => props.secondary && SecondaryText}
`

export default Text
