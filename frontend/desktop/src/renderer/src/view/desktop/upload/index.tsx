import styled from "styled-components"
import Layout from "@desktop/Layout"

import icon from "@app/icon"

import Help from "@components/help"
import Uploader from "@components/Upload"
import CardV2 from "@components/card-v2"

import Body from "@desktop/body"

import useStep from '@store/step'
import useData from "@hooks/useData"

const Container = styled('div')`
  display: flex;
  flex-direction: column;

  padding: 20px;
  
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 25px;

  .component-body{
    padding-top: 80px;
    height: 100%;
    justify-content: space-between;
  }

  .card-v2 {
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
        <div className="column">
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
          </div>


          <Help
            title="¿Problemas para adjuntar el archivo?"
            description="Chatea con nuestro soporte técnico"
          />

        </Body>

      </Container>
    </Layout>
  )
}

export default App