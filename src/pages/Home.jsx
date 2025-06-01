import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import Typed from "typed.js";
import { FaMapMarkerAlt } from "react-icons/fa";
import About from "./About";
import SkillPage from "./skillPage";
import Projects from "./Projects";
import Contact from "./Contact";

gsap.registerPlugin(useGSAP);

function Home() {
  const typedEl = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".heroContainer",
      { opacity: 0, y: 50, filter: "blur(5px)", rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        rotateX: 0,
        duration: 0.5,
        ease: "expo.inOut",
        stagger: 0.2,
      }
    );

    gsap.from(".heroImg", {
      opacity: 0,
      x: 100,
      rotateY: 50,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap.to(".connectBtn", {
      scale: 1.2,
      duration: 1,
      yoyo: true,
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Full Stack Developer",
        "Creative Coder",
        "UI/UX Explorer",
        "Student @ IIT Patna",
        "Problem Solver"
      ],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|"
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <style>
        {`
          .animate-wave {
            display: inline-block;
          }
          .animate-wave:hover {
            animation: wave 2s infinite;
            transform-origin: 70% 70%;
          }
          @keyframes wave {
            0% { transform: rotate(0.0deg); }
            10% { transform: rotate(14.0deg); }
            20% { transform: rotate(-8.0deg); }
            30% { transform: rotate(14.0deg); }
            40% { transform: rotate(-4.0deg); }
            50% { transform: rotate(10.0deg); }
            60% { transform: rotate(0.0deg); }
            100% { transform: rotate(0.0deg); }
          }
        `}
      </style>

      <section id="home" className="relative overflow-hidden">
        <img
          src="./leftBlob.svg"
          alt="leftBlob"
          className="absolute top-[67vh] left-0 w-[250px] h-[250px] opacity-40 z-0"
        />
        <img
          src="./rightBlob.svg"
          alt="rightBlob"
          className="absolute top-[80vh] right-0 w-[150px] h-[150px] opacity-40 z-0"
        />

        <div className="min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-10 pt-10 z-10 relative">
          <div id="heroContainer" className="flex flex-col gap-3 justify-center items-center md:items-start w-full md:w-1/2 text-center md:text-left">
            <h1 className="heroContainer text-border tracking-wide text-md sm:text-xl lg:text-3xl font-roboto font-medium">
              Hii, I am
              <span className="block text-primary-text text-4xl sm:text-5xl lg:text-6xl font-bold mt-1 flex justify-center md:justify-start items-center gap-2">
                Ayushman Kumar
                <span className="text-xl sm:text-2xl lg:text-3xl cursor-pointer animate-wave">👋</span>
              </span>
            </h1>

            <div className="heroContainer flex items-center justify-center md:justify-start text-secondary-text gap-2 text-sm opacity-70">
              <FaMapMarkerAlt className="text-primary-text" />
              <span className="text-xs sm:text-sm">IIT Patna, Bihar</span>
            </div>

            <div className="heroContainer text-[22px] sm:text-[32px] lg:text-[45px] text-primary-text font-bold mt-3">
              <span
                ref={typedEl}
                className="typedText bg-clip-text text-transparent bg-gradient-to-r from-primary-text to-secondary-text"
              ></span>
            </div>

            <div className="heroContainer heroBtn flex flex-col sm:flex-row gap-3 sm:gap-5 text-md mt-6">
              <button className="connectBtn bg-primary-text text-white px-4 py-2 rounded-4xl cursor-pointer hover:scale-102 hover:brightness-95 transition-all duration-300 z-10 shadow-xs shadow-secondary-text/50">
                Connect with Me
              </button>
              <button className="bg-transparent border-2 border-secondary-text text-secondary-text px-4 py-2 rounded-4xl cursor-pointer hover:scale-102 hover:brightness-95 transition-all duration-300 z-10 shadow-xs shadow-secondary-text/50">
                Download Resume
              </button>
            </div>
          </div>

          <div className="heroImg w-full md:w-1/2 flex justify-center items-center">
            <img
              src="./heroImage.svg"
              alt="Hero Image"
              className="w-[80%] sm:w-[60%] md:w-[85%] lg:w-[90%] max-w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <About />
      <SkillPage />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;