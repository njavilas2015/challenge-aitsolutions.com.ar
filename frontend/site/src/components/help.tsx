import styled from "styled-components"

import icon from "@app/icon"
import IconSvg from "@components/IconSvg"

const Container = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;

    gap: 20px;
    border: 2px solid #edf0f3;

    width: 100%;
    
    .title{
      font-weight: 600;
    }

    .row{
        gap: 15px;
    }

    .container-icon{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      border: 1px solid #c6cdcf;
      padding: 5px 10px;
      height: max-content;
      border-radius: 10px;
      font-size: .9em;
      font-weight: 600;
      cursor: pointer;

      .siura-icon {
        width: 20px;
        height: 20px;
      }
    }
  
`

interface IParams {
    className?: string
    title: string
    description: string
}

const App = (params: IParams): JSX.Element => {

    params = { className: "card-help", ...params }

    return (
        <Container className={params.className}>
            <div className="row">
                <div>
                    <IconSvg src={icon.help} />
                </div>
                <div>
                    <p className="title">{params.title}</p>
                    <p className="description">{params.description}</p>
                </div>
            </div>
        </Container>
    )
}

export default App