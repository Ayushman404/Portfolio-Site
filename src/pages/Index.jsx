import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Typed from "typed.js";
import { FaMapMarkerAlt } from "react-icons/fa";
import About from "./About";
import SkillPage from "./SkillPage";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";

gsap.registerPlugin(useGSAP);

function Index() {

  return (
    <>  
      <Home />
      <About />
      <SkillPage />
      <Projects />
      <Contact />
    </>
  );
}

export default Index;