import { MouseEventHandler, RefObject, useRef } from "react"
import styled from "styled-components"

import IconSvg from "@components/IconSvg"
import useHover from "@hooks/useHover"
import icon from "@app/icon"

const Container = styled('div') <{ isSelected: boolean }>`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  position: relative;

  
  border: 1px solid ${p => p.isSelected ? "var(--primary-color)" : "#cfcfdf"};
  background-color: ${p => p.isSelected ? "var(--card-select-background-color)" : "unset"};
  

  .badge{
    position: absolute;
    bottom: 5px;
    right: 10px;
  }

  .siura-icon{
    position: absolute;
    top: 5px;
    right: 15px;
    
    color: 1px solid red;
    background-color: ${p => p.isSelected ? "var(--primary-color)" : "#b9b9c9"};
    width: 25px;
    height: 25px;
  }
`

export interface ICadV1 {
  code: string
  description: string
  price: number

  isSelected: boolean
  onClick: () => void
  onSelected: () => void
}

const CadV1 = (params: ICadV1): JSX.Element => {

  const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const isHovered: boolean = useHover(ref, {})

  const handleSelected: MouseEventHandler<HTMLDivElement> = (e) => {

    e.stopPropagation()

    params.onSelected()
  }

  return (
    <Container ref={ref} onClick={params.onClick} isSelected={params.isSelected}>
      <div className="cover">

      </div>
      <div>
        <p>{params.code}</p>
        <p className="description">{params.description}</p>

        <div className="badge">
          <p>${params.price}</p>
        </div>
      </div>

      {(params.isSelected || isHovered) && <IconSvg onClick={handleSelected} src={icon.check} />}
    </Container>
  )
}

export default CadV1