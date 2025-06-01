import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const projectsData = [
  {
    id: 1,
    title: "Student Help Dashboard",
    description: "Dashboard for managing tasks, courses, and skill tracking.",
    images: [
      "./dashboardProject/HomePage.png",
      "./dashboardProject/Courses.png",
      "./dashboardProject/Tasks.png",
      "./dashboardProject/QuickLinks.png",
      "./dashboardProject/AddModal.png",
    ],
    github: "https://github.com/your-repo",
    demo: "https://your-live-site.com",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Tailwind.",
    images: [
      "./images/aot_bg_dark_levi.jpg",
      "./images/aot_bg_scouts.png",
    ],
    github: "https://github.com/your-portfolio",
    demo: "https://portfolio.com",
  },
  {
    id: 3,
    title: "To-Do App",
    description: "Simple and elegant to-do app with localStorage support.",
    images: [
      "./images/aot_bg_dark_levi.jpg",
      "./images/aot_bg_scouts.png"
    ],
    github: "https://github.com/your-todo",
    demo: "https://todo-app.com",
  },
  {
    id: 4,
    title: "To-Do App",
    description: "Simple and elegant to-do app with localStorage support.",
    images: [
      "./images/aot_bg_dark_levi.jpg",
      "./images/aot_bg_scouts.png"
    ],
    github: "https://github.com/your-todo",
    demo: "https://todo-app.com",
  },
  {
    id: 5,
    title: "To-Do App",
    description: "Simple and elegant to-do app with localStorage support.",
    images: [
      "./images/aot_bg_dark_levi.jpg",
      "./images/aot_bg_scouts.png"
    ],
    github: "https://github.com/your-todo",
    demo: "https://todo-app.com",
  },
  // Add more projects as needed
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [imageIndex, setImageIndex] = useState({});

  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setVisibleCount(4);
    } else if (width >= 1024) {
      setVisibleCount(3);
    } else if (width >= 768) {
      setVisibleCount(4);
    } else {
      setVisibleCount(2);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handleImageNav = (projectId, direction) => {
    setImageIndex((prev) => {
      const current = prev[projectId] || 0;
      const total = projectsData.find((p) => p.id === projectId).images.length;
      const newIndex = (current + direction + total) % total;
      return { ...prev, [projectId]: newIndex };
    });
  };

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-secondary-bg to-violet-400/40 p-6 text-gray-900">
      <h2 className="text-4xl font-bold text-center text-primary-text mb-10">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projectsData.slice(0, visibleCount).map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            <div className="relative w-full h-48">
              <img
                src={project.images[imageIndex[project.id] || 0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleImageNav(project.id, -1)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 text-purple-700 hover:bg-white"
              >
                <MdChevronLeft size={24} />
              </button>
              <button
                onClick={() => handleImageNav(project.id, 1)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full p-1 text-purple-700 hover:bg-white"
              >
                <MdChevronRight size={24} />
              </button>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-xl font-semibold text-primary-text text-shadow-2xs text-shadow-secondary-text">{project.title}</h3>
              <p className="text-sm mt-2 text-gray-600 flex-grow">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-blue-600 hover:underline"
                  title="View Live Demo"
                >
                  <FaExternalLinkAlt className="mr-1" /> Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-700 hover:underline"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < projectsData.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="bg-primary-text text-white px-6 py-2 rounded-full hover:bg-primary-text/80 transition duration-300 flex items-center"
            title="Load More Projects"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
