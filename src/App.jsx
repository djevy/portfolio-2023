import { BannerTop } from "./Components/BannerTop/BannerTop";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import { Footer } from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./Components/DarkMode/DarkModeProvider";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <DarkModeProvider>
          <Navbar />
          <BannerTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/contact" element={<Contact />}/> */}
            </Routes>
          </Layout>
          <Footer />
        </DarkModeProvider>
      </ParallaxProvider>
    </div>
  );
}

export default App;
