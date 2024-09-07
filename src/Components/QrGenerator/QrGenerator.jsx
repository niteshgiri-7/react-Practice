import React, { useState } from "react";
import QRCode from "react-qr-code";
const QrGenerator = () => {
  const [value, setValue] = useState("");
  const [qrCode, setQrCode] = useState("");

  function handleClick() {
    setQrCode(value);
    setValue("");
  }

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h3>Qr Code Generator</h3>
      <div>
        <input
          type="text"
          name="OR-code"
          style={{ padding: "10px 20px" }}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        ></input>
        <button onClick={handleClick}>Generate Qr-Code</button>
      </div>
      <QRCode size={400} value={qrCode} />
    </div>
  );
};

export default QrGenerator;
