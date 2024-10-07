import { MouseEventHandler, ReactNode } from "react"
import styled from "styled-components"

const Container = styled('div')`
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
        width: 20px !important;
        height: 20px !important;
    }
`

interface IButton {
    className?: string
    onClick?: MouseEventHandler<HTMLDivElement>
    children: ReactNode
}

const Button = (params: IButton): JSX.Element => {

    params = { className: "button", ...params }

    return <Container {...params} />
}

export default Button