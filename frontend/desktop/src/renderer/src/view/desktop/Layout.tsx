import { ReactNode, RefObject, useEffect, useRef } from "react"
import styled from "styled-components"

const Container = styled('div') <{ isVisible: boolean }>`
  position: absolute;
  transition: .4s ease-in-out;
  transform: translateY(-100%);
  background-color: var(--background-color);
`

export interface ILayout {
    isVisible: boolean
    children: ReactNode
}

const Layout = (params: ILayout): JSX.Element => {

    const ref: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

    useEffect(() => {

        const el: HTMLDivElement | null = ref.current

        if (!el) {
            return
        }

        if (params.isVisible) {
            el.style.transform = "translateY(0%)"
        }
        else {
            el.style.transform = "translateY(-100%)"
        }

    }, [params.isVisible])

    return (
        <Container ref={ref} className="full-screen" isVisible={params.isVisible}>
            {params.children}
        </Container>
    )
}

export default Layout