import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const imageRef = useRef(null);
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);

  useGSAP(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        scroller: window,
        start: "top 85%",
        end: "top 70%",
        scrub: 1,
      },
    });

    [block1Ref, block2Ref, block3Ref].forEach((ref, idx) => {
      gsap.from(ref.current, {
        opacity: 0.5,
        y: 100,
        rotateX: 5,
        transformOrigin: "top center",
        duration: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          scroller: window,
          start: "top 98%",
          end: "top 90%",
          scrub: 1,
        },
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-secondary-bg flex flex-col items-center justify-center px-4 md:px-12 py-20 text-secondary-text overflow-hidden"
    >
      {/* Micro Terminal Meta Text */}
      <span className="absolute bottom-6 left-6 text-sm text-secondary-text/50 font-mono tracking-wide select-none z-0">
        // system.module("creative.dev")
      </span>

      <span className="absolute top-6 right-6 text-sm text-secondary-text/50 font-mono tracking-wide select-none z-0">
        &gt;_ system@portfolio:~$ whoami
      </span>

      <h1 className="text-4xl md:text-6xl font-extrabold text-primary-text text-center mb-12 tracking-tight drop-shadow-lg select-none font-display z-10">
        About Me
      </h1>

      <div ref={imageRef} className="w-40 h-40 md:w-52 md:h-52 mb-10 z-10">
        <img
          src="./images/Ayushman_portrait.jpg"
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-2 border-primary-text shadow-md"
        />
      </div>

      <div className="flex flex-col gap-14 w-full relative z-10">
        {[block1Ref, block2Ref, block3Ref].map((ref, i) => (
          <div
            key={i}
            ref={ref}
            className={`relative z-10 group max-w-3xl bg-white/10 backdrop-blur-md border-2 border-white/10 p-6 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
              i % 2 == 0 ? "self-start" : "self-end"
            }`}
          >
            <div className="absolute inset-0 z-0 bg-primary-text/5 blur-xl rounded-xl scale-75 group-hover:scale-[0.85] transition-all duration-500 pointer-events-none"></div>
            <p className="relative text-lg sm:text-xl md:text-2xl text-center font-medium z-10 font-body leading-relaxed text-secondary-text">
              {i === 0 && (
                <>
                  I’m{" "}
                  <span className="text-primary-text font-semibold">
                    Ayushman Kumar
                  </span>{" "}
                  — an AI & Data Science undergrad at{" "}
                  <span className="text-primary-text">IIT Patna</span>, building
                  full-stack projects with a focus on solid systems, clean UI,
                  and real-world utility.
                </>
              )}
              {i === 1 && (
                <>
                  I approach development as problem-solving — building things
                  that work well, look clean, and scale when they need to.
                  Whether it’s structuring backend logic or refining a user
                  interface, I enjoy figuring things out and learning as I go.
                </>
              )}
              {i === 2 && (
                <>
                  Beyond code, I’m into esports, help in campus events, also a
                  sub-coordinator at Celesta Flagship Events, and enjoy working with people who bring
                  sharp ideas and strong execution.
                </>
              )}
            </p>
          </div>
        ))}

        {/* Vertical Timeline Indicator */}
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary-text/30 rounded-full z-0"></div>
      </div>

      <span className="mt-12 text-primary-text text-xl italic font-signature animate-pulse z-10">
        — Ayushman
      </span>
    </section>
  );
}
