import styled from "styled-components"
import IconSvg from "@components/IconSvg"

import useStore from '@store/index'
import useStep, { IState } from '@store/step'
import icon from "@app/icon"

const Container = styled('div')`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 0px 20px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 99;

  border-top: 1px solid #ccc;

  background-color: var(--background-color);

  .item {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 60px;
    min-width: 70px;
    border-radius: 10px;

    font-size: .8em;
    gap: 10px;


    .siura-icon {
      width: 25px;
    }
  }

  .item-active {
    color: var(--primary-color);
    font-weight: 800;
    border-radius: 7px;

    .siura-icon {
      background-color: var(--primary-color);
    }
  }
`


const App = (): JSX.Element => {

  const step = useStep(state => state.step)

  const setStep = useStep(state => state.setStep)

  const setPage = useStep(state => state.setPage)

  const setReset = useStore(state => state.setReset)

  const setRaw = useStore(state => state.setRaw)

  const handleReset = () => {

    setPage('settings')

    setStep('home')

    setReset()
  }

  const item: { icon: string; label: string, to: IState['step'] }[] = [
    { icon: icon.product, label: "Catálogo", to: 'home' },
    { icon: icon.download, label: "Descargar", to: 'download' },
    { icon: icon.new, label: "Crear", to: 'create' },
    { icon: icon.upload_icon, label: "Subir", to: 'upload' },
    { icon: icon.settings, label: "Ajustes", to: 'settings' },
  ]

  return (
    <Container>
      {item.map((v, i) => {

        const handleClick = () => {

          if (v.to === 'settings') {

            handleReset()

            return
          }

          if (v.to === 'create') {

            setRaw({
              id: "",
              code: "",
              description: "",
              price: 0
            })
          }

          setStep(v.to)
        }

        return (
          <div
            key={i}
            className={step === v.to ? "item item-active" : "item"}
            onClick={handleClick}
          >
            <IconSvg src={v.icon} />
            <p key={i}>
              {v.label}
            </p>
          </div>
        )
      })}
    </Container>
  )
}

export default App