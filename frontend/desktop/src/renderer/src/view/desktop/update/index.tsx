import styled from "styled-components"

import Layout from "@desktop/Layout"
import Form from "@components/Form"

import useStep from '@store/step'
import useStore, { IRaw } from '@store/index'
import useData from "@hooks/useData"

const Container = styled('div')`
  display: flex;
  flex-direction: row;

  padding: 20px;

  width: 100%;
  height: 100%;

  background-color: var(--background-color);

  .middle {
    display: flex;
    flex-direction: column;

    padding: 40px;
    padding-top: 60px;
    width: 50%;
    min-width: 50%;

    gap: 20px;
  }

  .item {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }

  .button-primary {
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--primary-color);
    color: white;
    text-transform: uppercase;
  }
`

const App = (): JSX.Element => {

  const step = useStep(state => state.step)

  const setStep = useStep(state => state.setStep)

  const setRaw = useStore(state => state.setRaw)

  const { update } = useData()

  const handleCreate = async (value: IRaw) => {

    await update(value)

    handleCancel()
  }

  const handleCancel = () => {

    setRaw({
      id: "",
      code: "",
      description: "",
      price: 0
    })

    setStep('home')
  }

  return (
    <Layout isVisible={step === 'update'}>
      <Container>
        <div className="middle">
          <Form
            title={"Actualizar articulo"}
            button="Actualizar"
            onValue={handleCreate}
            onCancel={handleCancel}
          />
        </div>

        <div className="middle">

        </div>
      </Container>
    </Layout>
  )
}

export default App