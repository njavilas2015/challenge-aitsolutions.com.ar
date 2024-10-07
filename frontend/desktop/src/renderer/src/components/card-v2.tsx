import { MouseEventHandler } from "react"
import styled from "styled-components"

import Button from "@components/Button"
import IconSvg from "@components/IconSvg"

const Container = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    width: 100%;

    .row{
        gap: 25px;

        .siura-icon {
            width: 35px;
            min-width: 35px;
            height: 35px;
            min-height: 35px;
        }
    }

    .title{
        width: 120px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-weight: 600;
    }
`

export interface ICardV2 {
    className?: string
    ico: string
    title: string
    description: string
    button: {
        icon: string
        label: string
        onClick: () => void
    }
}

const CardV2 = (params: ICardV2): JSX.Element => {

    params = { className: "card-v2", ...params }

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {

        e.preventDefault()

        params.button.onClick()
    }

    return (
        <Container className={params.className}>
            <div className="row">
                <div>
                    <IconSvg src={params.ico} />
                </div>
                <div>
                    <p className="title">{params.title}</p>
                    <p className="description">{params.description}</p>
                </div>
            </div>


            <Button onClick={handleClick}>
                <IconSvg src={params.button.icon} />
                <p>{params.button.label}</p>
            </Button>
        </Container>
    )
}

export default CardV2