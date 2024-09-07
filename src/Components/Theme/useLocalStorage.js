// import { useEffect, useState } from "react";

// export const useLocalStorage = (key, defaultValue) => {
//   let storedTheme;
//   const getTheme = () => { //local storage ma vako theme nikalera dincha, state variable ma set huncha initially
//     try {
//       const item = localStorage.getItem(key);
//       storedTheme = item ? JSON.parse(item) : defaultValue;
//     } catch (error) {
//       console.error(error);
//       storedTheme = defaultValue;
//     }

//     return storedTheme;
//   };

//   const [themeValue, setThemeValue] = useState(getTheme());

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(themeValue)); //jaba themeValue change huncha, local storage maa pani change huncha
//   }, [themeValue, key]);

//   return [themeValue, setThemeValue];
// };
import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(error);
      return defaultValue;
    }
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};
