import React, { useContext, CSSProperties } from "react";
import "./PageLoader.css";
import { RingLoader } from "react-spinners";
import { DarkModeContext } from "../DarkMode/DarkModeProvider";


const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const PageLoader = ({ loading }) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="loading-page">
      <p id="loading-name">Darren R Evans</p>
      <p id="loading-title">Web Developer</p>
      <RingLoader
        color={darkMode ? "#2c4a63" : "#16DB65"}
        loading={loading}
        css={override}
        size={50}
      />
      <p>Loading...</p>
    </div>
  );
};
