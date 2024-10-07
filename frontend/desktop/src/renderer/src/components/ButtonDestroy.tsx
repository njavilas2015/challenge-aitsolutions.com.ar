import styled from "styled-components"
import IconSvg from "@components/IconSvg"
import icon from "@app/icon"

const Container = styled('div')`
    position: fixed;
    bottom: 15px;
    right: 15px;
    border-radius: 50%;
    padding: 20px;


    .siura-icon{
      background-color: var(--color-danger);
      width: 35px;
      height: 35px;
    }

    .counter {
        position: absolute;
        bottom: 10px;
        right: 10px;

        display: flex;
        align-items: center;
        justify-content: center;
        
        width: 20px;
        min-width: 20px;

        height: 20px;
        min-height: 20px;

        border-radius: 50%;
        color:  white;
        background-color: var(--color-danger);

        font-size: .8em;
        font-weight: 600;
    }
`

interface IButtonDestroy {
    className?: string
    length: number
    onClick: () => void
}

const App = (params: IButtonDestroy): JSX.Element => {

    params = { className: "button-destroy", ...params }

    return params.length > 0 ? (
        <Container onClick={params.onClick} className={params.className}>
            <IconSvg src={icon.delete} />
            <p className="counter">{params.length}</p>
        </Container>
    ) : <>
    </>
}
export default App