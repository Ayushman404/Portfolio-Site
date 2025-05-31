import React, { use } from "react";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import SkillPage from "./skillPage";

gsap.registerPlugin(useGSAP);



function Home() {

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
      // filter: "blur(5px)",
      rotateY: 50,
      // rotateX: 90,
      duration: 0.5,
      ease: "power2.out",
    })

    gsap.to(".connectBtn",{
      scale: 1.2,
      duration: 1,
      yoyo: true,
      repeat: -1,
    })

  

  }, []);

  return (
    <>
      <section id="home">
        <img
          src="./leftBlob.svg"
          alt="leftBlob"
          className="absolute top-[67vh] -left-22 w-[250px] h-[250px]"
        />
        <img
          src="./rightBlob.svg"
          alt="leftBlob"
          className="absolute top-[80vh] -right-0 w-[150px] h-[150px]"
        />

        <div className="h-[100vh] w-full flex flex-col items-center  justify-evenly sm:justify-center sm:flex-row md:ml-4 sm:ml-3 lg:ml-10">
          <div id="heroContainer" className="flex flex-col gap-4 justify-center items-start w-[80%] sm:w-[50%] h-[60%] px-10">
            <h1 className="heroContainer text-border tracking-wide text-md sm:xl lg:text-2xl  text-nowrap font-roboto font-medium">
              Hii, I am{"  "}
              <span className="text-primary-text text-2xl lg:text-5xl">
                Ayushman Kumar
              </span>
            </h1>

            <h2 className="heroContainer text-secondary-text tracking-wide text-md sm:xl lg:text-2xl font-roboto font-medium">
              A student, self-taught developer, and tech enthusiast passionate
              about building things that solve real problems.
            </h2>

            <h4 className="heroContainer text-secondary-text tracking-wide text-[14px] sm:lg lg:text-xl font-roboto font-regular">
              Exploring Web Development and UI/UX to build clean, functional projects.
            </h4>


            <div className="heroContainer heroBtn flex flex-col sm:flex-row gap-3 sm:gap-5 text-md text-nowrap">
              <button className="connectBtn bg-primary-text text-white px-3 py-1 rounded-4xl cursor-pointer
              hover:scale-102 hover:brightness-95 transition-all duration-300 z-10 shadow-xs shadow-secondary-text/50">Connect with Me</button>
              <button className="bg-tranparent border-3 inset-3 border-secondary-text text-secondary-text px-3 py-1 rounded-4xl cursor-pointer
              hover:scale-102 hover:brightness-95 transition-all duration-300 z-10 shadow-xs shadow-secondary-text/50">Download Resume</button>
            </div>
          </div>

          <div
            className="heroImg overflow-hidden w-[50%] flex justify-center items-center  transition-all duration-300
          "
          >
            <img
              src="./heroImage.svg"
              alt="Hero Image"
              className="heroImg w-[100%] h-[100%] text-shadow-lg"
            />
          </div>
        </div>
        {/* <hr className="w-[80%] sm:w-[50%] h-[1px] bg-secondary-text mx-auto" /> */}
      </section>

      <About />

      <SkillPage />
    </>
  );
}

export default Home;
