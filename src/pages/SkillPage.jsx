import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import React from "react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiTailwindcss,
  SiJavascript,
  SiGnubash,
  SiRedux,
  SiExpress,
  SiFramer,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "C++", icon: <SiCplusplus size={24} />, level: 90 },
  { name: "Python", icon: <FaPython size={24} />, level: 85 },
  { name: "JavaScript", icon: <SiJavascript size={24} />, level: 80 },
  { name: "React", icon: <FaReact size={24} />, level: 80 },
  { name: "Tailwind", icon: <SiTailwindcss size={24} />, level: 80 },
  { name: "NodeJs", icon: <FaNodeJs size={24} />, level: 75 },
  { name: "Express", icon: <SiExpress size={24} />, level: 80 },
  { name: "Figma", icon: <FaFigma size={24} />, level: 70 },
];

const learning = ["Framer Motion", "File Uploads (Multer / Cloudinary)", "OpenAI API (chat, whisper)", "Data Science" ];

const tools = [
  "GSAP",
  "Redux",
  "Axios",
  "Node.js",
  "Git & GitHub",
  "Docker",
  "Postman",
];
const futIdeas = [
  "RAG Applications",
  "LangChain / LlamaIndex",
  "Three.js",
  "WebSockets",
  "System Design Basics"
];

const SkillsSection = () => {
  useGSAP(() => {
    gsap.from(".skillsHead", {
      y: 100,
      duration: 0.5,
      opacity: 0.8,
      scale: 0.2,
      scrollTrigger: {
        trigger: ".skillsHead",
        start: "top 95%",
        end: "top 80%",
        scroller: window,
        scrub: 2,
      },
    });

    gsap.from(".rightSkills",{
      opacity: 0.4,
      x: 100,
      scaleX: 0.4,
      duration: 0.5,
      stagger: 0.1,
      ease: "power4.in",
      scrollTrigger: {
        trigger: ".rightSkills",
        scroller: window,
        start: "top 95%",
        end: "top 80%",
        scrub: 2,
      }
    })

    gsap.from(".skillCircle", {
      opacity: 0,
      scale: 0.2,
      duration: 0.5,
      ease: "power4.in",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".skillCircle",
        start: "top 90%",
        end: "top 70%",
        scroller: window,
        scrub: 2,
      },
    });
  }, []);

  return (
    <section
      id="skills"
      className="w-full min-h-screen text-center flex flex-col gap-4 px-4 py-6 bg-secondary-bg bg-[url(/images/gridLinesSkill.jpg)] bg-cover bg-blend-multiply overflow-hidden"
    >
      <div className="skillsHead pt-2  ml-10">
        <h1
          className="text-4xl md:text-6xl font-extrabold text-primary-text text-center mb-2
        select-none drop-shadow-lg tracking-tight"
        >
          Skills
        </h1>
        <p className="text-sm text-secondary-text mb-5">
          Technologies I've mastered and what I'm currently focusing on
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full flex-grow">
        {/* Tech Stack with Circular Progress */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-full lg:w-[65%] justify-items-center px-2 lg:px-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="skillCircle relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center"
            >
              <svg className="absolute w-full h-full rotate-[-90deg] z-0 hidden sm:inline-block">
                <circle
                  cx="50%"
                  cy="50%"
                  r="44"
                  className="fill-none stroke-rose-300"
                  strokeWidth="5"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="44"
                  className="fill-none stroke-purple-500"
                  strokeWidth="5"
                  strokeDasharray={Math.PI * 88}
                  strokeDashoffset={Math.PI * 88 * (1 - skill.level / 100)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white shadow-md z-10 flex flex-col items-center justify-center text-center">
                <div className="mb-1">{skill.icon}</div>
                <p className="text-xs font-semibold">{skill.name}</p>
                <p className="text-[10px] text-gray-500">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Learning + Tools + Soft Skills */}
        <div className="w-full lg:w-[35%] flex flex-col items-center justify-evenly text-center px-2 gap-4 h-full">
          <div className="rightSkills w-full bg-primary-bg rounded-xl shadow-lg p-4">
            <h2 className="text-2xl font-bold text-primary-text mb-2 text-shadow-secondary-text text-shadow-3xs">
              Currently Learning
            </h2>
            <ul className="list-disc list-inside text-sm text-left space-y-1">
              {learning.map((item, i) => (
                <li
                  key={i}
                  className="text-secondary-text font-medium tracking-wide pl-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rightSkills w-full bg-primary-bg rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-semibold text-primary-text mb-2 text-shadow-secondary-text text-shadow-3xs">
              Libraries & Tools
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-medium shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="rightSkills w-full bg-primary-bg rounded-xl shadow-lg p-4">
            <h2 className="text-xl font-semibold text-primary-text mb-2 text-shadow-secondary-text text-shadow-3xs">
              Future Interests
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {futIdeas.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
