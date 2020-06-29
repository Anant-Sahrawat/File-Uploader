import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("#");

  const Upload = (e) => {
    const file = e.target.files;
    setUrl(URL.createObjectURL(file[0]));
  };
  return (
    <div className="container-fluid">
      <div className="text-center">
        <h1>Hello World</h1>
      </div>
      <div className="text-center" style={{ marginTop: "25px" }}>
        <div style={{ marginBottom: "10px" }}>
          <input
            placeholder={"Upload Linking Image"}
            type="file"
            onChange={Upload}
          />
        </div>
        <img src={url} />
        <div>{url}</div>
      </div>
    </div>
  );
}

export default App;
