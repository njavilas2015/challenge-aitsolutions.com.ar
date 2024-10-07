import styled from "styled-components"

import Settings from "@desktop/settings"
import App from "@desktop/app"

const Container = styled('div')`
  overflow: hidden;
`

const Landing = (): JSX.Element => { 

  return (
    <Container className="full-screen">
      <Settings />
      <App />
    </Container>
  )
}

export default Landing