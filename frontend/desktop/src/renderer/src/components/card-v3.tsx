import styled from "styled-components"

const Container = styled('div') <{ isOnline: boolean }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    gap: 20px;    

    background-color: ${p => p.isOnline ? "green" : "red"};
    color: white;
    font-weight: 600;
    text-align: center;
`

export interface ICardV3 {
    className?: string
    isOnline: boolean
}

const CardV3 = (params: ICardV3): JSX.Element => {

    params = { className: "card-v3", ...params }

    return (
        <Container className={params.className} isOnline={params.isOnline}>
            <p>
                {params.isOnline ? "Conexión establecida!" : "Error al conectar, verifique la conexión"}
            </p>
        </Container>
    )
}

export default CardV3