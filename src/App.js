import './App.css';
import { useRef, useState } from 'react';

function App() {

  const ref = useRef();

  const [objectUrl, setObjectUrl] = useState("");

  const onSelectFile = e => {
    setObjectUrl(URL.createObjectURL(e.target.files[0]));
  };

  const onCancelFile = e => {
    ref.current.value = "";
    setObjectUrl("");
  };

  return (
    <>
      <div className="App" style={{ backgroundColor: "#009BB4", height: "10vw", padding: "50px" }}>
        <h1>{`圖片上傳/預覽/即時顯示----動態<input type="file" />`}</h1>
        <h2>----選擇要顯示的圖檔----</h2>
        <input type="file" accept=".png,.jpeg" onChange={onSelectFile} ref={ref} ></input>
        <button onClick={onCancelFile}>取消</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", height: "10vw" }}>
        <div style={{ width: "20%", textAlign: "center" }}>
          cancel select file use ref
        </div><hr />
        <div style={{ width: "60%", textAlign: "center" }}>
          <img src={objectUrl} alt="" width="80%" />
        </div>
        <hr /><div style={{ width: "20%", wordWrap: "break-word", textAlign: "center" }}>
          props<br />
          ------<br />
          accept: accept file type<br />
          audio/*  = any audio file.<br />
          video/* = any video file.<br />
          image/* = any image file. <br />
          ex<br />
          accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"<br />
          ------<br />
          capture: use which camera and/or microphone<br />
          ------<br />
          multiple: select multiple files<br />
        </div>
      </div>
    </>
  );
}

export default App;
