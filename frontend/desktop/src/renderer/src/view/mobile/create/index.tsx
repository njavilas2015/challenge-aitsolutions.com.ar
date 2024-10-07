import styled from "styled-components"

import Layout from "@mobile/Layout"
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

  const { create } = useData()

  const handleCreate = async (value: IRaw) => {

    await create(value)

    setRaw({
      id: "",
      code: "",
      description: "",
      price: 0
    })

    setStep('home')
  }

  return (
    <Layout isVisible={step === 'create'}>
      <Container>
      <Form
            title={"Nuevo articulo"}
            button="Crear"
            onValue={handleCreate}
            onCancel={() => setStep('home')}
          />
      </Container>
    </Layout >
  )
}

export default App