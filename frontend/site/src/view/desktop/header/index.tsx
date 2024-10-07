import styled from "styled-components"

import Button from "@components/Button"
import IconSvg from "@components/IconSvg"

import useStore from '@store/index'
import useStep, { IState } from '@store/step'
import icon from "@app/icon"

const Container = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 0px 20px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;

  background-color: var(--background-color);

  .item {
    border-radius: 10px;
  }

  .item-active {
    color: white;
    font-weight: 600;
    background-color: var(--primary-color);
    padding: 0px 10px 3px 10px;
    border-radius: 7px;
  }
`

const App = (): JSX.Element => {

  const step = useStep(state => state.step)

  const setStep = useStep(state => state.setStep)

  const setPage = useStep(state => state.setPage)

  const setReset = useStore(state => state.setReset)

  const setRaw = useStore(state => state.setRaw)

  const item: { label: string, to: IState['step'] }[] = [
    { label: "Catálogo", to: "home" },
    { label: "Descargar", to: "download" },
    { label: "Subir", to: "upload" },
    { label: "Ajustes", to: "settings" },
  ]

  const handleReset = () => {

    setPage('settings')

    setStep('home')

    setReset()
  }

  const handleCreate = () => {

    setStep('create')

    setRaw({
      id: "",
      code: "",
      description: "",
      price: 0
    })
  }

  return (
    <Container>
      <div className="row">
        {item.map((v, i) => {

          const handleClick = () => {

            if (v.to === 'settings') {

              handleReset()

              return
            }

            setStep(v.to)
          }

          return (
            <p
              key={i}
              className={step === v.to ? "item-active" : "item"}
              onClick={handleClick}>
              {v.label}
            </p>
          )
        })}
      </div>

      {step !== 'create' && <Button onClick={handleCreate}>
        <IconSvg src={icon.new} />
        <p>Crear</p>
      </Button>}

    </Container>
  )
}

export default App