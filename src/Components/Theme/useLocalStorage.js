import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [themeValue, setThemeValue] = useState(() => {
    let currentValue;
    try {
      const storedValue = localStorage.getItem(key);
      currentValue = storedValue ? JSON.parse(storedValue) : defaultValue;
      return currentValue;
    } catch (error) {
      console.error(error);
      currentValue = defaultValue;
      return currentValue;
    }
  });

  useEffect(() => {
    const newValue = JSON.stringify(themeValue);
    localStorage.setItem(key, newValue);
  }, [themeValue, setThemeValue]);

  return [themeValue, setThemeValue];
};

export default useLocalStorage;
