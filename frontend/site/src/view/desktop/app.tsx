import styled from "styled-components"

import Header from "@desktop/header"
import Home from "@desktop/home"

import Download from "@desktop/download"
import Upload from "@desktop/upload"

import Create from "@desktop/create"

import useStep from "@store/step"
import Update from "./update"


const Container = styled('div') <{ isVisible: boolean }>`
  transform: ${p => p.isVisible ? "translateX(-100%)" : "translateX(0%)"};
  transition: .4s ease-in-out;
`

const App = (): JSX.Element => {

  const page = useStep(state => state.page)

  return (
    <Container className="full-screen" isVisible={page === 'app'}>
      <Header />

      <Home />

      <Download />

      <Upload />

      <Create />

      <Update />
    </Container>
  )
}

export default App