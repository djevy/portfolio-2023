import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, SetDarkMode] = useState(false);
  const toggleDarkMode = () => {
    SetDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "light-mode" : ""}>
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export {DarkModeContext, DarkModeProvider};
