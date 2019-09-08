/**
 *
 * Text
 *
 */

import styled, { css } from 'styled-components'

const BoldText = css`
  font-weight: bold;
`

const SemiBoldText = css`
  font-weight: 600;
`

const LightText = css`
  font-weight: 300;
`

const SecondaryText = css`
  color: #bababa;
`

const TerciaryText = css`
  color: #9657f6;
`

const HugeText = css`
  font-size: 28px;
`

const BigText = css`
  font-size: 20px;
`

const MediumText = css`
  font-size: 18px;
`

const Text = styled.p`
  margin: 0;

  font-size: 1em;
  color: #000000;

  ${props => props.huge && HugeText}
  ${props => props.big && BigText}
  ${props => props.medium && MediumText}
  ${props => props.bold && BoldText}
  ${props => props.semiBold && SemiBoldText}
  ${props => props.light && LightText}
  ${props => props.secondary && SecondaryText}
  ${props => props.terciary && TerciaryText}
`

export default Text
