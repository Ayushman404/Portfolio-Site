import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Highlighter from "react-highlight-words";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// function About() {
//   const aboutTopRef = useRef(null);
//   const highlightsRef = useRef([]);

  // useEffect(() => {
  //   gsap.fromTo(
  //     aboutTopRef.current,
  //     { opacity: 0, y: 40 },
  //     { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
  //   );

//     highlightsRef.current.forEach((el, i) => {
//       gsap.fromTo(
//         el,
//         { backgroundColor: "rgba(255, 255, 255, 0)" },
//         {
//           backgroundColor: "rgba(255, 255, 255, 0.15)",
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//           duration: 2 + i * 0.5,
//           delay: i * 0.3,
//         }
//       );
//     });
//   }, []);

//   const addHighlightRef = (el) => {
//     if (el && !highlightsRef.current.includes(el)) {
//       highlightsRef.current.push(el);
//     }
//   };

//   return (
//     <section
//       id="about"
//       className="w-full h-screen bg-gradient-to-br from-secondary-bg to-violet-400/40
//       flex flex-col px-6 py-6 text-secondary-text"
//     >
//       {/* Heading */}
//       <h1
//         className="text-4xl md:text-5xl font-extrabold text-primary-text text-center mb-6
//         select-none drop-shadow-lg flex-shrink-0"
//       >
//         About Me
//       </h1>

//       {/* Top section: image + text */}
//       <div
//         ref={aboutTopRef}
//         className="flex flex-1 w-full gap-8
//           flex-col lg:flex-row items-center justify-center"
//         style={{ minHeight: 0 }}
//       >
//         {/* Image */}
//         <div
//           className="flex-shrink-0 w-full lg:w-2/5 max-w-md h-60 sm:h-72 md:h-80 lg:h-full"
//           style={{ minHeight: 0 }}
//         >
//           <img
//             src="./aboutTopImage.svg"
//             alt="About Illustration"
//             className="w-full h-full object-contain rounded-lg shadow-lg"
//           />
//         </div>

//         {/* Text */}
//         <div
//           className="w-full lg:w-3/5 max-w-3xl
//           text-base sm:text-lg md:text-xl leading-relaxed tracking-wide overflow-y-auto"
//           style={{ maxHeight: "100%" }}
//         >
//           <p className="mb-5">
//             Hey! I’m{" "}
//             <span
//               ref={addHighlightRef}
//               className="font-semibold text-white bg-white/20 rounded px-1"
//             >
//               Ayushman Kumar
//             </span>
//             , an{" "}
//             <span
//               ref={addHighlightRef}
//               className="font-semibold text-white bg-white/20 rounded px-1"
//             >
//               AI & Data Science
//             </span>{" "}
//             student at IIT Patna, crafting user-first digital experiences.
//           </p>

//           <p className="mb-5">
//             Skilled in{" "}
//             <span
//               ref={addHighlightRef}
//               className="font-semibold text-white bg-white/20 rounded px-1"
//             >
//               C++, Python, JavaScript, React
//             </span>
//             , I turn ideas into clean, functional interfaces and design with{" "}
//             <span
//               ref={addHighlightRef}
//               className="font-semibold text-white bg-white/20 rounded px-1"
//             >
//               Figma
//             </span>
//             .
//           </p>

//           <p>
//             Beyond code, I enjoy fast learning, leading a{" "}
//             <span
//               ref={addHighlightRef}
//               className="font-semibold text-white bg-white/20 rounded px-1"
//             >
//               robotics event
//             </span>{" "}
//             and hosting{" "}
//             <span
//               ref={addHighlightRef}
//               className="font-semibold text-white bg-white/20 rounded px-1"
//             >
//               esports
//             </span>
//             , collaborating with creative minds.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

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
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutTopRef.current,
          scroller: window,
          // markers: true,
          start: "top 90%",
          end: "top 50%",
        },
      }
    );
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
        className="text-4xl md:text-6xl font-extrabold text-primary-text text-center mb-10
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
