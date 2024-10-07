import styled from "styled-components"

import Body from "@mobile/body"
import CardV2 from "@components/card-v2"
import Check from "./check"

import useStep from '@store/step'
import icon from "@app/icon"
import useSettings from "@hooks/useSettings"

const Container = styled('div') <{ isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  
  align-items: center;

  width: 100%;
  height: 100%;

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

    input {
      outline: none;
      padding: 10px 15px;
      border-radius: 7px;
      border: 1px solid #ccc;
    }
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

  const settings = useSettings()

  return (
    <Container className="full-screen" isVisible={page === 'settings'}>

      <Body>
        <p>Ajustes</p>

        <div className="item">
          <p>Servidor</p>
          <input
            type="text"
            defaultValue={settings.getHostName()}
            value={settings.getHostName()}
            onChange={e => settings.handleServer(e.target.value)}
          />
          <small className="description">
            Default: localhost
          </small>
        </div>

        <div className="item">
          <p>Puerto</p>
          <input type="number"
            defaultValue={settings.getPort()}
            value={settings.getPort()}
            onChange={e => settings.handlePort(parseInt(e.target.value))}
          />
        </div>

        <CardV2
          ico={icon.cloud}
          title={"Servidor"}
          description={settings.getUrl()}
          button={{
            icon: icon.arrow_right,
            label: "conectar",
            onClick: settings.handleCheck
          }} />
      </Body>

      <div style={{ width: '100%' }}>
        <Check />


      </div>

    </Container>
  )
}

export default App