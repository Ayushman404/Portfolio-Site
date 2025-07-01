import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: "Student Help Dashboard",
    description: "A dashboard to manage tasks, courses, and skill tracking for students.",
    overview: "Built using the HTML, CSS, and vanilla JS to centralize student productivity tools.",
    features: ["Task and deadline management", "Course tracking", "CPI Calculation", "Storing Quick Links"],
    challenges: ["Doing the Complex operation of showing CPIs and adding courses", "LocalStorage optimization"],
    stack: ["JavaScript", "LocalStroage", "CSS"],
    image: "/dashboardProject/Courses.png",
    github: "https://github.com/Ayushman404/WebDev/tree/main/student_dashboard",
    demo: "https://student-dashboard-4673.vercel.app",
    quote: "Built for the overwhelmed student in me.",
    notes: "Learned JavaScript in depth."
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "My personal portfolio with animations and GSAP effects.",
    overview: "React-based site with scroll animations and cinematic project displays.",
    features: ["Hero, About, Skills, Projects, Contact sections", "GSAP scroll effects", "Dark/light mode"],
    challenges: ["Responsive animation across breakpoints", "Theme toggling", "New Layout and ideas"],
    stack: ["React", "GSAP", "TailwindCSS"],
    image: "/dashboardProject/portfolioHome.png",
    github: "https://github.com/Ayushman404/Portfolio-Site",
    demo: "https://ayushman404.me",
    quote: "Where motion meets my creative soul.",
    notes: "Crafted with storytelling in mind and showing my personality through it."
  }
];

export default function Projects() {
  const cardRefs = useRef([]);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const [selected, setSelected] = useState(null);

  useGSAP(() => {
    cardRefs.current.forEach((card, i) => {
      const imageBox = imageRefs.current[i];
      const textBox = textRefs.current[i];

      gsap.set(imageBox, {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        overflow: "hidden"
      });
      gsap.set(textBox, {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem"
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (window.innerWidth >= 768) {
            gsap.to(imageBox, {
              width: "50%",
              duration: 1.4,
              ease: "expo.out"
            });
            gsap.to(textBox, {
              width: "50%",
              x: "100%",
              duration: 1.4,
              ease: "expo.out"
            });
          }
        },
        onLeaveBack: () => {
          if (window.innerWidth >= 768) {
            gsap.to(imageBox, {
              width: "100%",
              duration: 1.2,
              ease: "expo.inOut"
            });
            gsap.to(textBox, {
              width: "100%",
              x: 0,
              duration: 1.2,
              ease: "expo.inOut"
            });
          }
        }
      });
    });
  }, []);

  return (
    <section id="projects" className="py-28 px-4 md:px-16 text-secondary-text bg-secondary-bg">
      <h1 className="text-center text-5xl md:text-7xl font-extrabold mb-12 tracking-tight text-primary-text">
        Projects
      </h1>

      <div className="flex flex-col gap-24 max-w-6xl mx-auto">
        {projectsData.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className="relative bg-primary-bg overflow-hidden rounded-3xl shadow-sm h-[30rem] shadow-secondary-text p-4"
          >
            <div
              ref={(el) => (imageRefs.current[i] = el)}
              className="z-0 h-full md:static"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div
              ref={(el) => (textRefs.current[i] = el)}
              className="z-10 bg-black/60 text-primary-text text-center md:static"
            >
              <div className="max-w-md mx-auto md:mx-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
                <p className="text-lg mb-4 text-gray-200/90">{project.description}</p>
                <div className="flex justify-center md:justify-start flex-wrap gap-2 mb-6">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full border border-gray-300/30 bg-primary-bg/20 backdrop-blur-sm text-gray-300 hover:bg-primary-bg/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelected(project)}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-300 rounded-md text-sm bg-slate-700/90 hover:bg-slate-900 hover:text-white transition"
                >
                  View More <FaExternalLinkAlt size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center px-4 pt-24 pb-10 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-primary-bg text-secondary-text p-8 max-w-4xl w-full rounded-t-3xl overflow-y-auto max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-2xl hover:text-red-400"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-4 text-primary-text">{selected.title}</h2>
            <img src={selected.image} className="rounded-xl w-full object-cover mb-6" />
            <p className="mb-4 text-base leading-relaxed"><strong>Overview:</strong> {selected.overview}</p>
            <div className="mb-4">
              <h3 className="font-semibold text-primary-text mb-2">Features</h3>
              <ul className="list-disc list-inside text-sm text-secondary-text/90">
                {selected.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold text-primary-text mb-2">Challenges</h3>
              <ul className="list-disc list-inside text-sm text-secondary-text/90">
                {selected.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href={selected.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-secondary-text hover:border-primary-text text-secondary-text hover:text-primary-text rounded-lg text-sm flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
