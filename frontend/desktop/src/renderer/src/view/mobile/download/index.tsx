import styled from "styled-components"

import Layout from "@mobile/Layout"
import Body from "@mobile/body"

import Help from "@components/help"
import CardV2 from "@components/card-v2"

import useStep from '@store/step'
import icon from "@app/icon"
import useData from "@hooks/useData"

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  
  align-items: center;

  width: 100%;
  height: 100%;

  .card-help{
    position: fixed;
    bottom: 100px;
    width: 90%;
  }
`

const App = (): JSX.Element => {

  const step = useStep(state => state.step)

  const { download } = useData()

  return (
    <Layout isVisible={step === 'download'}>
      <Container>

        <Body>
          <p>Descarga la base de datos</p>

          <CardV2
            ico={icon.excel}
            title="Backup Today"
            description="XLSX - 4.49Kb"
            button={{
              icon: icon.download,
              label: "Descargar",
              onClick: download
            }} />

        </Body>

        <Help
          title="¿Problemas para iniciar la descarga?"
          description="Chatea con nuestro soporte técnico"
        />

      </Container>
    </Layout>
  )
}

export default App