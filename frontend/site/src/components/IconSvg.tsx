import { MouseEventHandler } from "react"
import styled from "styled-components"

const Container = styled('div') <{ src: string }>`
  mask: url(${p => p.src}) no-repeat 100% 100%;
  background-color: #5F6368;
  width: 35px;
  mask-size: cover;
  aspect-ratio: 1/1;
`

export interface IIconSvg {
  src: string,
  event?: string
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

const IconSvg = (params: IIconSvg): JSX.Element => {

  params = { className: 'siura-icon', ...params }

  return <Container {...params} />
}

export default IconSvg