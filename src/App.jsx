import React, { useState, useEffect } from "react";

import { PageLoader } from "./Components/PageLoader/PageLoader";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./Components/DarkMode/DarkModeProvider";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="App">
      <ParallaxProvider>
        <DarkModeProvider>
          {loading ? (
            <PageLoader loading={loading}/>
          ) : (
            <>
              <Navbar />
              
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<ProjectsPage/>} />
                  <Route path="/about-me" element={<AboutMePage />} />
                </Routes>
              </Layout>
              <Footer />
            </>
          )}
        </DarkModeProvider>
      </ParallaxProvider>
    </div>
  );
}

export default App;
