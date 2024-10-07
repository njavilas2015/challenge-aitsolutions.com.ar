import styled from "styled-components"
import useIsMobile from "@hooks/useIsMobile";

import loadable from '@loadable/component'

const Mobile = loadable(() => import("@app/view/mobile"))

const Desktop = loadable(() => import("@app/view/desktop"))

const Container = styled('div')`
  --primary-color: #3a7af2;
  --light-color: #e9defe;
  --background-color: #ffffff;
  --card-select-background-color: rgb(180, 200, 252)

  --border-color: #edeff5;
  --background-color-card: #f2f2f2;
  --primary-color-disable: var(--primary-color);
  --bar-progress-background-color: var(--primary-color);

  --color-danger: #cf1212;

  font-family: "Darker Grotesque";
  font-size: 1.2em;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: var(--font-color);
  background-color: var(--background-color);

  *{
    scrollbar-width: var(--scrollbar-width);
    scrollbar-color: var(--scrollbar-color);
  }

  *::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  *::-webkit-scrollbar-track {
    background: #fff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #e1e4e7;
    border-radius: 20px;
    border: 3px solid #fff;
  }
  
 
  h1{
    padding: 0;
    margin: 0px;
    margin-bottom: 10px;
    font-size: 2.5em;
    color: #5d5e6c;
    line-height: 1em;
    font-weight: 600;

    @media (max-width: 900px) {
      font-size: 2em;
    }
  }

  .description {
    color: #5a5b61;
    font-size: .8em;
    line-height: 1.2em;
  }

  .full-screen {
    display: flex;
  
    width: 100vw;
    min-width: 100vw;
    height: 100vh;
    min-height: 100vh;
  }

  .row {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .badge{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ffe9a7;
    background-color: #fff3cc;
    border-radius: 10px;
    font-size: .8em;
    color: #5d4000;
    padding: 0px 7px;
    font-weight: 500;
  }
  
  input {
    outline: none;
    padding: 10px 15px;
    border-radius: 7px;
    border: 1px solid #ccc;
  }

  .button-primary {
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: var(--primary-color);
    color: white;
    text-transform: uppercase;
  }
`

const App = (): JSX.Element => {

  const isMobile: boolean = useIsMobile();

  return (
    <Container className="full-screen">
      {isMobile && <Mobile />}
      {!isMobile && <Desktop />}
    </Container>
  )
}

export default App