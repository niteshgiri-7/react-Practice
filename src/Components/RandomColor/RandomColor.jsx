import React, { useEffect, useState } from "react";
import "./styles.css";

const RandomColor = () => {
  const [randomColor, setRandomColor] = useState(null);
  const [colorType, setColorType] = useState("hex");

  const ColorUtils = (length) => {
    const colorCode = Math.floor(Math.random() * length);
    return colorCode;
  };

  const generateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[ColorUtils(hex.length)];
    }
    setRandomColor(hexColor);
  };
  const generateRgbColor = () => {
    let rgbColor = "rgb(";
    for (let i = 0; i < 3; i++) {
      rgbColor += ColorUtils(255);
      for (let j = i; j <= i && j < 2; j++) {
        rgbColor += ",";
      }
    }
    rgbColor += ")";
    setRandomColor(rgbColor);
  };

  useEffect(() => {
    colorType === "hex" ? generateHexColor() : generateRgbColor();
  }, [colorType]);
  return (
    <div className="mainContainer" style={{ backgroundColor: randomColor }}>
      <div className="btns">
        <button onClick={() => setColorType("hex")}>choose hex color</button>
        <button onClick={() => setColorType("rgb")}>choose rgb color</button>
        <button
          onClick={colorType === "hex" ? generateHexColor : generateRgbColor}
        >
          {" "}
          generate {colorType} color
        </button>
      </div>
      <div className="colorCodes">
        <span>
          Chosen {colorType === "hex" ? "hexColor" : " Rgb Color"}
          {": "}
          {randomColor}
        </span>
      </div>
    </div>
  );
};

export default RandomColor;
