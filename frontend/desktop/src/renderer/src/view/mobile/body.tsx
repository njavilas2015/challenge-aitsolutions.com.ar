import { ReactNode } from "react"
import styled from "styled-components"

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
`

interface IBody {
    children: ReactNode
}

const Body = (params: IBody): JSX.Element => {

    return (
        <Container>
            {params.children}
        </Container>
    )
}

export default Body