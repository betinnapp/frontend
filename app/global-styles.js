import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  #app {
    background-color: #e6e6e6;
    min-height: 100%;
    min-width: 100%;
    font-size: 14px;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .bt-text-align-center {
    text-align: center;
  }
`

export default GlobalStyle
