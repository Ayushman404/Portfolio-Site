import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  FaArrowRight,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function HeroSection() {
  const hiRef = useRef(null);
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const backgroundRef = useRef(null);
  const glowRef = useRef(null);
  const mouseLightRef = useRef(null);

  // Parallax background movement (throttled)
  useEffect(() => {
    let frameId;
    const moveParallax = (e) => {
      if (!frameId) {
        frameId = requestAnimationFrame(() => {
          const { clientX, clientY } = e;
          const x = (clientX / window.innerWidth - 0.5) * 30;
          const y = (clientY / window.innerHeight - 0.5) * 30;
          if (backgroundRef.current) {
            backgroundRef.current.style.transform = `translate(${x}px, ${y}px)`;
          }
          if (mouseLightRef.current) {
            mouseLightRef.current.style.transform = `translate(${
              clientX - 50
            }px, ${clientY - 50}px)`;
          }
          frameId = null;
        });
      }
    };
    window.addEventListener("mousemove", moveParallax);
    return () => {
      window.removeEventListener("mousemove", moveParallax);
      cancelAnimationFrame(frameId);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(hiRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power2.out",
    })
      .from(
        nameRef.current,
        {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        taglineRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .from(
        glowRef.current,
        {
          opacity: 0,
          scale: 0.5,
          duration: 2,
          ease: "power2.out",
        },
        "-=1"
      );
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap');

        :root {
          --stroke-color: #be123c; /* rose-600 for light mode */
        }
        .dark {
          --stroke-color: #fa8072; /* salmon for dark mode */
        }

        .text-stroke-primary {
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: var(--stroke-color);
        }

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
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <section
        id="home"
        className="relative w-full h-screen bg-secondary-bg overflow-hidden flex items-center justify-center px-6"
      >
        {/* Floating Background Dots */}
        <div
          ref={backgroundRef}
          className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden transition-transform duration-200"
        >
          {[...Array(22)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen blur-[1px]"
              style={{
                width: `${6 + Math.random() * 10}px`,
                height: `${6 + Math.random() * 10}px`,
                backgroundColor: `rgba(105,105,215,${
                  0.2 + Math.random() * 0.2
                })`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 5
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Mouse Glow */}
        <div
          ref={mouseLightRef}
          className="pointer-events-none fixed w-32 h-32 bg-primary-text/10 blur-2xl rounded-full z-0 transition-transform duration-75"
        ></div>

        {/* Glow Behind Name */}
        <div
          ref={glowRef}
          className="absolute z-0 w-[40vw] h-[40vw] max-w-[300px] max-h-[300px] bg-primary-text/10 blur-xl rounded-full animate-pulse"
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl">
          <h2
            ref={hiRef}
            className="text-lg sm:text-xl md:text-2xl text-secondary-text mb-1"
          >
            Hi{" "}
            <span className="text-xl sm:text-2xl lg:text-3xl cursor-pointer animate-wave">
              👋
            </span>
            , I'm
          </h2>
          <h1
            ref={nameRef}
            className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-extrabold uppercase tracking-wider text-primary-text/10 text-stroke-primary break-words"
            style={{ fontFamily: "Poppins" }}
          >
            Ayushman Kumar
          </h1>
          <p
            ref={taglineRef}
            className="mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary-text font-semibold leading-relaxed"
          >
            Full Stack Developer
            <br />
            Exploring Data Science & Machine Learning
          </p>
          <div className="flex items-center justify-center gap-2 text-secondary-text text-sm opacity-70 mt-2">
            <FaMapMarkerAlt className="text-primary-text" aria-hidden="true" />
            <span className="text-xs sm:text-sm">IIT Patna, Bihar</span>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 border border-primary-text/30 px-6 py-2 rounded-xl text-primary-text font-semibold backdrop-blur-sm bg-white/5 hover:bg-primary-text/10 hover:scale-105 transition-transform duration-300"
              aria-label="Contact Ayushman"
            >
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              Let’s Connect
            </a>

            {/* Mobile Social Icons - moved below CTA */}
            <div className="flex sm:hidden gap-6 z-10">
              {[
                {
                  href: "https://www.linkedin.com/in/ayushman-kumar-116aa7328/",
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/Ayushman404",
                  icon: <FaGithub />,
                  label: "GitHub",
                },
                {
                  href: "mailto:ayushmankumar9905000@gmail.com",
                  icon: <FaEnvelope />,
                  label: "Email",
                },
              ].map(({ href, icon, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-text/80 text-xl hover:scale-110 transition-transform duration-300"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Icons - Desktop Side */}
        <div className="absolute left-6 bottom-1/2 translate-y-1/2 flex-col gap-3 z-10 hidden sm:flex">
          {[
            {
              href: "https://www.linkedin.com/in/ayushman-kumar-116aa7328/",
              icon: <FaLinkedin />,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/Ayushman404",
              icon: <FaGithub />,
              label: "GitHub",
            },
            {
              href: "mailto:ayushmankumar9905000@gmail.com",
              icon: <FaEnvelope />,
              label: "Email",
            },
          ].map(({ href, icon, label }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text/80 text-xl hover:scale-125 transition-transform duration-300 opacity-80 hover:opacity-100"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Signature Element */}
        <div className="absolute bottom-6 left-6 text-secondary-text text-sm font-mono opacity-80 animate-pulse">
          &gt;_ building ideas...
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 right-6 text-secondary-text text-sm opacity-70 animate-bounce">
          ↓ scroll
        </div>
      </section>
    </>
  );
}
