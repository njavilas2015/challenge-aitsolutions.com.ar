import styled from "styled-components"

import Layout from "@desktop/Layout"
import Body from "@desktop/body"

import Help from "@components/help"
import CardV2 from "@components/card-v2"

import useStep from '@store/step'
import icon from "@app/icon"
import useData from "@hooks/useData"

const Container = styled('div')`
  display: flex;
  flex-direction: column;

  padding: 20px;
  
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  .component-body{
    padding-top: 80px;
    height: 100%;
    justify-content: space-between;
  }
`

const App = (): JSX.Element => {

  const step = useStep(state => state.step)

  const { download } = useData()

  return (
    <Layout isVisible={step === 'download'}>
      <Container>

        <Body>
          <div className="column">

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
          </div>

          <Help
            title="¿Problemas para iniciar la descarga?"
            description="Chatea con nuestro soporte técnico"
          />

        </Body>

      </Container>
    </Layout>
  )
}

export default App