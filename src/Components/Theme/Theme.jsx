import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import "./theme.css";
const Theme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };
  return (
    <div className="themeContainer" data-theme={theme}>
      <div className="container">
        <h3>Hello World!!</h3>
        <button onClick={handleToggle} className="btn">Change theme</button>
      </div>
    </div>
  );
};

export default Theme;


// custom hook banayo
// initial theme ko local state variable banayo jun chai automatically initialize huncha (with the help of function that extracts the already stored theme value)
// useEffect ko help bata jaba theme change huncha taba localStorage ma pani theme change huncha