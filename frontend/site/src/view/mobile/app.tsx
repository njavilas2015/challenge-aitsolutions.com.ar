import styled from "styled-components"

import Footer from "@mobile/footer"
import Home from "@mobile/home"

import Download from "@mobile/download"
import Upload from "@mobile/upload"

import useStep from "@store/step"
import Create from "./create"
import Update from "./update"

const Container = styled('div') <{ isVisible: boolean }>`
  transform: ${p => p.isVisible ? "translateX(-100%)" : "translateX(0%)"};
  transition: .4s ease-in-out;
`

const App = (): JSX.Element => {

  const page = useStep(state => state.page)

  return (
    <Container className="full-screen" isVisible={page === 'app'}>

      <Footer />

      <Home />

      <Download />

      <Upload />

      <Create />

      <Update />
    </Container>
  )
}

export default App