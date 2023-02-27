import React, { createContext, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [theme, SetTheme] = useState(localStorage.getItem("theme") || 'light-mode');
  const [darkMode, SetDarkMode] = useState(theme === "light-mode" ? true : false);
  const toggleDarkMode = () => {
    if (theme === 'light-mode') {
      SetDarkMode(false);
      SetTheme('dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      SetDarkMode(true);
      SetTheme('light-mode');
      localStorage.setItem('theme', 'light-mode');
    }
    
  };
  return (
    <div className={darkMode ? "light-mode" : ""}>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeContext, DarkModeProvider };
