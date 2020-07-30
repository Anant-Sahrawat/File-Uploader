import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("#");
  const [text, setText] = useState("");

  const Upload = (e) => {
    const file = e.target.files;
    setUrl(URL.createObjectURL(file[0]));
  };

  const ClickMe = () => {
    let image_url = "default";
    if (window.Android) {
      image_url = window.Android.getImageUrl();
    } else {
      image_url = "Desktop View";
    }
    setText(image_url);
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
          <input
            placeholder={"Linking Image"}
            type="file"
            accept="image/*"
            capture
            onChange={Upload}
          />
        </div>
        <img src={url} alt="didn't work" />
        <video
          autoplay
          muted
          loop
          src={url}
          height="100%"
          width="100%"
          preload="auto"
        />
        <div>{url}</div>
      </div>
      <br />
      <button onClick={ClickMe}>Click Me</button>
      <br />
      <div>{text}</div>
    </div>
  );
}

export default App;
