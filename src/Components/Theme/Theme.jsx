import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css";
const Theme = () => {
  const [themeValue, setThemeValue] = useLocalStorage("theme", "dark");
  const handleToggle = () => {
    setThemeValue(themeValue === "dark" ? "light" : "dark");
  };
  return (
    <div className="mainContainer" data-theme={themeValue}>
      <h3>Hello World! Let's Change theme.</h3>
      <button className="btn" onClick={handleToggle}>
        Change Theme
      </button>
    </div>
  );
};

export default Theme;
