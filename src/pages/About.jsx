import React from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function About() {

  useGSAP(() => {
    gsap.from(".about",{
      opacity: 0,
      y: 50,
      rotateX: 90,
      filter: "blur(5px)",
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about",
        start: "top 90%",
        end: "top 50%",
        scroller: window,
        // markers: true,
        
      }
    })
    gsap.from(".aboutTop", {
      opacity: 0,
      // x: 50,
      // rotateY: -90,
      rotateX: -50,
      duration: 1.5,
      filter: "blur(5px)",
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".aboutTop",
        start: "top 90%",
        end: "top 50%",
        scroller: window,
        // markers: true,
      }
    });

    gsap.from(".aboutBottom", {
      opacity: 0,
      // x: -50,
      // rotateY: 90,
      rotateX: -50,
      filter: "blur(5px)",
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".aboutBottom",
        start: "top 90%",
        end: "top 50%",
        scroller: window,
        // markers: true,
      }
    });
    
}
, []);



  return (
    <div>
      <section
        id="about"
        className="w-full h-[100vh] flex flex-col justify-start bg-gradient-to-br from-secondary-bg to-violet-400/40"
      >
        <h1 className="about w-fit border-b-4 h-[10%] flex items-center ml-10 text-4xl
         md:text-5xl font-bold text-primary-text text-shadow-3xs text-shadow-secondary-text/40">
          About Me
        </h1>
        <div className="aboutTop w-full h-[50%] flex flex-row items-center
         justify-around">
          <div className="w-[40%] h-[80%] md:w-[50%] md:h-[100%] flex items-center
           justify-center">
            <img
              src="./aboutTopImage.svg"
              alt="about Image Illustration"
              className="w-[100%] h-[100%]"
            />
          </div>

          <div className="w-[80%] md:w-[70%] h-[60%] px-10 flex flex-col items-start
           justify-center text-md/6 sm:text-lg/7 md:text-xl/8 lg:text-2xl/9 tracking-wide
           text-secondary-text ">
            <p className="mb-5 md:mb-7">
              Hii, I am <b className="text-xl md:text-2xl">Ayushman Kumar</b>
            </p>
            <p className="mb-5 md:mb-7">
              An <b>AI & Data Science student at IIT Patna</b>, building smart,
              user-first solutions. From <span className="font-bold">C++</span> to <b>Python</b>, <b>JavaScript</b>, <b>React</b>, and 
                <b> Figma</b> — I turn ideas into interactive experiences.
            </p>
            <p>
              Beyond code, I thrive on quick learning, managing a <b>robotics event </b>
              at Celesta, <b>hosting esports </b> at Infinito, and collaborating with
              creative minds to make things happen.
            </p>
          </div>
        </div>

        <div className="aboutBottom w-full h-[40%] flex flex-row items-center
         justify-around text-md sm:text-lg md:text-xl lg:text-2xl
         text-secondary-text pl-7
         ">
          <div>
            <ul>
              <li>🧠 Fast learner & curious thinker</li>
              <li>🎨 Love making things look AND feel good</li>
              <li>🤝 Team player with a builder’s mindset</li>
              <li>⚡ Currently learning: Framer Motion, Redux, and Japanese</li>
            </ul>
          </div>

          <div className="w-[40%] h-[80%] md:w-[50%] md:h-[100%] flex items-center
           justify-center">
            <img
              src="./aboutBottomImage.svg"
              alt="about Image Illustration"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
