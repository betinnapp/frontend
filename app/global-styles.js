import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }
    
  body {
    background-color: #fafafa;
    
    .fontLoaded {
      font-family: 'Poppings', sans-serif;
    }
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    font-size: 14px;
    display: flex;
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
