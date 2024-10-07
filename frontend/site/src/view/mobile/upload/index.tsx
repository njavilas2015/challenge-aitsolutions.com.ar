import styled from "styled-components"
import Layout from "@mobile/Layout"

import icon from "@app/icon"

import Help from "@components/help"
import Uploader from "@components/Upload"
import CardV2 from "@components/card-v2"

import Body from "@mobile/body"

import useStep from '@store/step'
import useData from "@hooks/useData"

const Container = styled('div')`
  display: flex;
  flex-direction: column;

  padding: 20px;
  
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 25px;

  .card-v2 {
    width: 90%;
  }

  .card-help{
    position: fixed;
    bottom: 100px;
    width: 90%;
  }
`

const App = (): JSX.Element => {

  const step = useStep(state => state.step)

  const setStep = useStep(state => state.setStep)

  const { upload } = useData()

  return (
    <Layout isVisible={step === 'upload'}>
      <Container>
        <Body>
          <p>Importa los datos desde tu archivo excel</p>

          <Uploader
            title="Importa los datos desde tu archivo excel"
            description={["Tamaño máximo: 1GB", "Formato soportado xlsx"]}
          >
            {(file, fileName, onReset) => (
              <>
                {file && <CardV2
                  ico={icon.excel}
                  title={fileName}
                  description="XLSX - 4.49Kb"
                  button={{
                    icon: icon.upload_cloud,
                    label: "Adjuntar",
                    onClick: () => {

                      upload(file, fileName)

                      onReset()

                      setStep('home')
                    }
                  }}
                />}
              </>
            )}
          </Uploader>

        </Body>

        <Help
          title="¿Problemas para adjuntar el archivo?"
          description="Chatea con nuestro soporte técnico"
        />

      </Container>

    </Layout>
  )
}

export default App