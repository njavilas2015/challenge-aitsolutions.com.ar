import styled from "styled-components"
import { RefObject, useRef, useState } from "react"
import icon from "@app/icon"

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px;
    border-radius: 10px;

    position: relative;

    gap: 20px;

    border: 2px solid #edf0f3;

    .container-body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    
    input {
      display: none;
    }

    .title{
      font-weight: 600;
    }

    .siura-icon {
      width: 60px;
      height: 60px;
    }
`
interface IUpload {
  title: string
  description: string[]
  children: (file: File | null, fileName: string, onReset: () => void) => JSX.Element
}

const Upload = (params: IUpload): JSX.Element => {

  const [file, setFile] = useState<File | null>(null);

  const [fileName, setFileName] = useState<string>("");

  const [_, setFileContent] = useState<string | ArrayBuffer | null>(null);

  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile) {

      setFile(selectedFile);

      setFileName(selectedFile.name);

      const reader = new FileReader();

      reader.onload = () => setFileContent(reader.result);

      reader.readAsText(selectedFile);
    }
  };

  const handleClick = () => {

    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  const handleReset = () => {

    setFile(null)

    setFileName("")

    setFileContent(null)
  }

  return (
    <>
      {!file && <Container onClick={handleClick}>
        <div className="container-body">
          <img className="siura-icon" src={icon.upload} />

          <input type="file" ref={inputRef} onChange={handleFileChange} />

          <div>
            <p className="title">{params.title}</p>
            {params.description.map((v, i) => <p key={i} className="description">{v}</p>)}
          </div>
        </div>

      </Container>}

      {params.children(file, fileName, handleReset)}
    </>

  )
}

export default Upload