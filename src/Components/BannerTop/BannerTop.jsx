import { ParallaxBanner } from "react-scroll-parallax";
import Foreground from "../../Images/foregroundWide.png";
import Background from "../../Images/fujiBackground.jpg";
import "./BannerTop.css";

import Typewriter from "./Typewriter.jsx"

export const BannerTop = () => {
  const background = {
    // image:
    //   "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg",
    image: Background,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="inset center">
        <h1 className="headline"><Typewriter texts='["Welcome!", "ようこそ!"]' period="2000" /></h1>
      </div>
    )
  };

  const foreground = {
    // image:
      // "https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png",
      image: Foreground,
    translateY: [0, 15],
    scale: [1, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const gradientOverlay = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="full"
    />
  );
};
