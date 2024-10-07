import styled from "styled-components"
import { useEffect } from "react"

import useStore from "@store/index"
import useStep from "@store/step"
import useData from "@hooks/useData"

import ButtonDestroy from "@components/ButtonDestroy"
import CadV1 from "@components/cad-v1"

const Container = styled('div')`
  display: flex;
  padding: 20px;
  justify-content: center;
  position: relative;

  .container-body{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .scrolled{
    overflow: scroll;
    padding-top: 20px;

  }

  .button-destroy {
    bottom: 85px;
  }
`

const App = (): JSX.Element => {

  const data = useStore(state => state.data)

  const select: string[] = useStore(state => state.select)

  const setStep = useStep(state => state.setStep)

  const setSelected = useStore(state => state.setSelected)

  const setRaw = useStore(state => state.setRaw)

  const { pull, destroy } = useData()

  useEffect(() => {

    pull()

  }, [])

  return (
    <Container className="full-screen">

      <div className="container-body">
        <p>Articulos</p>

        <div className="scrolled">

        <div className="column">
            {data.map((v, i) => {

              const handleUpdate = () => {

                setRaw(v)

                setStep('update')
              }

              return (
                <CadV1 key={i} {...v}
                  onClick={handleUpdate}
                  isSelected={select.includes(v.id)}
                  onSelected={() => setSelected(v.id)}
                />
              )
            }

            )}
          </div>


        </div>
      </div>

      <ButtonDestroy length={select.length} onClick={destroy}/>
    </Container>
  )
}

export default App