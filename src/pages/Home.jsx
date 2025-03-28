import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  Faq,
  FaqCryptoGurus,
  Contact,
  HowToBuy,
  Hero,
  Navbar,
  Tokenomics,
} from "../components";

const App = () => {
  const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.1 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.1 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.1 });

  const [activeNav, setActiveNav] = useState(9);

  useEffect(() => {
    const handleScroll = () => {
      section1InView
        ? setActiveNav(0)
        : section2InView
        ? setActiveNav(1)
        : section3InView
        ? setActiveNav(2)
        : section4InView
        ? setActiveNav(3)
        : setActiveNav(9);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [section1InView, section2InView, section3InView, section4InView]);

  return (
    <div className="relative z-0">
      <div ref={section1Ref} className="relative z-0">
        <Navbar activeProp={activeNav} />
        <Hero />
      </div>

      <div ref={section2Ref} className="relative z-10">
        <HowToBuy />
      </div>

      <div ref={section3Ref} className="relative z-0">
        <Tokenomics />
      </div>
      <div ref={section4Ref} className="relative z-0">
        <Faq />
        <FaqCryptoGurus />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default App;
