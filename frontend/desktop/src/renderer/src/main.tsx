import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import loadable from '@loadable/component'

const App = loadable(() => import("@app/App"))

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0px;

    p {
      margin: 0px;
    }

    * {
      box-sizing: border-box;
    }
  }
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>,
)
