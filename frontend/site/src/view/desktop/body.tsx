import { ReactNode } from "react"
import styled from "styled-components"

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 50%;
`

interface IBody {
    className?: string
    children: ReactNode
}

const Body = (params: IBody): JSX.Element => {

    params = { className: 'component-body', ...params }

    return <Container {...params} />
}

export default Body