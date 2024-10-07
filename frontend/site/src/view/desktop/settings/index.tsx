import styled from "styled-components"

import Body from "@desktop/body"
import CardV2 from "@components/card-v2"
import Check from "./check"

import useStep from '@store/step'
import icon from "@app/icon"
import useSettings from "@hooks/useSettings"

const Container = styled('div') <{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;

  padding: 20px;
  
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 25px;

  transform: ${p => p.isVisible ? "translateX(0%)" : "translateX(-100%)"};
  transition: .4s ease-in-out;

  .card-help{
    position: fixed;
    bottom: 100px;
    width: 90%;
  }

  .item {
    display: flex;
    flex-direction: column;

    gap: 10px;
  }

  .button {
    align-items: center;
    justify-content: center;
  }

  .card-v2 {

    .button {
      flex-direction: row-reverse;
      align-items: center;
    }

    .siura-icon {

    }
  }
`

const App = (): JSX.Element => {

  const page = useStep(state => state.page)

  const { url, handleCheck, handlePort, handleServer } = useSettings()

  return (
    <Container className="full-screen" isVisible={page === 'settings'}>

      <Body>
        <p>Ajustes</p>

        <div className="item">
          <p>Servidor</p>
          <input
            type="text"
            defaultValue={new URL(url).hostname}
            onChange={e => handleServer(e.target.value)}
          />
          <small className="description">
            Default: localhost
          </small>
        </div>

        <div className="item">
          <p>Puerto</p>
          <input type="number"
            defaultValue={8080}
            onChange={e => handlePort(parseInt(e.target.value))}
          />
        </div>

        <CardV2
          ico={icon.cloud}
          title={"Servidor"}
          description={`${new URL(url).protocol}//${new URL(url).hostname}:${new URL(url).port}/api`}
          button={{
            icon: icon.arrow_right,
            label: "conectar",
            onClick: handleCheck
          }} />

        <Check />
      </Body>
    </Container>
  )
}

export default App