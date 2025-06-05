import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Highlighter from "react-highlight-words";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);



// Key terms to highlight
const HIGHLIGHT_TERMS = [
  "Ayushman Kumar",
  "AI & Data Science",
  "IIT Patna",
  "C++",
  "Python",
  "JavaScript",
  "React",
  "Figma",
  "Beyond code",
];

// Enhanced About component with react-highlight-words and improved typography
function About() {
  const aboutTopRef = useRef(null);

  useGSAP(() => {
    gsap.from(
      aboutTopRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.6,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutTopRef.current,
          scroller: window,
          // markers: true,
          start: "top 90%",
          end: "top 80%",
          scrub: 2,
        },
      }
    );
    gsap.from(".aboutHead", {
      y: 100,
      optacity: 0.8,
      scale: 0.2,
      x: 30,
      duration: 0.5,
      scrollTrigger:{
        trigger: ".aboutHead",
        scroller: window,
        // markers: true,
        start: "top 95%",
        end: "top 80%",
        scrub: 2,
      }
    });
  }, []);

  // Custom highlight style for react-highlight-words
  const highlightStyle = {
    background: "rgba(139,92,246,0.18)",
    borderRadius: "0.375rem",
    fontWeight: 600,
    padding: "0.1em 0.3em",
    boxShadow: "0 1px 4px 0 rgba(139,92,246,0.08)",
  };

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gradient-to-br from-secondary-bg to-violet-400/40
      flex flex-col px-4 md:px-10 py-10 text-secondary-text"
    >
      {/* Heading */}
      <h1
        className="aboutHead text-4xl md:text-6xl font-extrabold text-primary-text text-center mb-10
        select-none drop-shadow-lg tracking-tight"
      >
        About Me
      </h1>

      {/* Top section: image + text */}
      <div
        ref={aboutTopRef}
        className="flex flex-1 w-full gap-10
          flex-col lg:flex-row items-center justify-center"
        
      >
        {/* Image */}
        <div
          className="flex-shrink-0 w-full lg:w-2/5 max-w-md h-60 sm:h-72 md:h-80 lg:h-full"
          
        >
          <img
            src="./aboutTopImage.svg"
            alt="About Illustration"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text */}
        <div
          className="w-full lg:w-3/5 max-w-3xl
          text-lg sm:text-xl md:text-2xl leading-relaxed tracking-wide overflow-y-auto
           rounded-xl p-6 text-secondary-text"
        >
          <p className="mb-6">
            <Highlighter
              highlightClassName=""
              searchWords={HIGHLIGHT_TERMS}
              autoEscape={true}
              textToHighlight={
                "Hey! I’m Ayushman Kumar, an AI & Data Science student at IIT Patna, crafting user-first digital experiences."
              }
              highlightStyle={highlightStyle}
            />
          </p>

          <p className="mb-6">
            <Highlighter
              highlightClassName=""
              searchWords={HIGHLIGHT_TERMS}
              autoEscape={true}
              textToHighlight={
                "Skilled in C++, Python, JavaScript, React, I turn ideas into clean, functional interfaces and design with Figma."
              }
              highlightStyle={highlightStyle}
            />
          </p>

          <p>
            <Highlighter
              highlightClassName=""
              searchWords={HIGHLIGHT_TERMS}
              autoEscape={true}
              textToHighlight={
                "Beyond code, I enjoy fast learning, Participating in Various events and Playing esports, collaborating with creative minds."
              }
              highlightStyle={highlightStyle}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
