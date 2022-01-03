import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-osx-font-smoothing: grayscale;
    &::before, &::after {
      box-sizing: inherit;
    }
  }
  ${({ theme }) => css`
     html {
        font-size: 62.5%;
     }
     body,
     #root {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
        font-family: 'Asap', sans-serif;
        font-size: 1.6rem;
        font-weight: 300;
     }
     input,
     textarea,
     input::placeholder,
     button {
        font-family: 'Asap', sans-serif;
     }
  `}
`
export default GlobalStyles
