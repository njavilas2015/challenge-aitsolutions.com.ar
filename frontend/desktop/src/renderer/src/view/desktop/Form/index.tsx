import styled from "styled-components"
import Button from "@components/Button"

import useStore, { IRaw } from "@app/store"
import Item from "./item"

const Container = styled('div')`
    display: flex;
    flex-direction: column;

    gap: 10px;    

    .button {
        justify-content: center;
        align-items: center;
        width: 30%;
    }

    .err{
        color: red;
    }
`


export interface IForm {
    title: string
    button: string
    onValue: (value: IRaw) => void
    onCancel: () => void
}

const App = (params: IForm): JSX.Element => {

    const value = useStore(state => state.raw)

    const setRaw = useStore(state => state.setRaw)

    const handleClick = () => {

        if (value.code.length > 0 && value.description.length > 0) {

            params.onValue(value)
        }
    }

    return (
        <Container>
            <h1>{params.title}</h1>

            <Item
                value={value.code}
                title={"Código"}
                onValue={(value: string) => setRaw({ code: value })}
                err={"Código no valido"}
                description={"Identificador del articulo"}
            />

            <Item
                value={value.description}
                title={"Descripción"}
                onValue={(value: string) => setRaw({ description: value })}
                err={"Descripción no valida"}
                description={"Describe el articulo"}
            />

            <div className="item">
                <p>Precio</p>

                <input
                    type="number"
                    value={value.price}
                    defaultValue={value.price}
                    onChange={({ target }) => setRaw({ price: parseInt(target.value) })}
                />

                <small className="description">
                    Agrega un valor al articulo
                </small>
            </div>

            <br />

            <div className="row">
                <Button onClick={params.onCancel}>
                    <p>Cancelar</p>
                </Button>

                <Button className="button-primary" onClick={handleClick}>
                    <p>{params.button}</p>
                </Button>
            </div>
        </Container>
    )
}

export default App