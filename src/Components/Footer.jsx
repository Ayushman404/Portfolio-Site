// components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative w-full border-t-2 border-secondary-text/30 bg-secondary-bg brightness-[92%] px-6 md:px-12 py-10 transition-all duration-300"
      id="footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-start text-sm">
        
        {/* Left - Logo and microtext */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold tracking-wide text-primary-text">AYUSHMAN KUMAR</h2>
          <span className="text-secondary-text text-xs font-mono italic tracking-tight cursor-default">
            # thanks for scrolling, let's connect
          </span>
        </div>

        {/* Middle - Navigation */}
        <div className="flex flex-col gap-2 sm:items-start lg:items-center">
          {[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group text-secondary-text transition duration-200 hover:text-primary-text focus:outline-none"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-primary-text group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Right - Socials + Resume CTA + Freelance prompt */}
        <div className="flex flex-col items-start lg:items-end gap-4">
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/Ayushman404" target="_blank" rel="noopener noreferrer"
              className="hover:text-primary-text text-secondary-text transition-transform duration-200 transform hover:-translate-y-1">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ayushman-kumar-116aa7328/" target="_blank" rel="noopener noreferrer"
              className="hover:text-primary-text text-secondary-text transition-transform duration-200 transform hover:-translate-y-1">
              <FaLinkedin />
            </a>
            <a href="mailto:ayushmankumar9905000@gmail.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-primary-text text-secondary-text transition-transform duration-200 transform hover:-translate-y-1">
              <FaEnvelope />
            </a>
          </div>

          <a
            href="/Ayushman_resume.pdf"
            download
            aria-label="Download Resume"
            title="Download my resume"
            className="group mt-2 inline-flex items-center gap-2 bg-primary-text text-white px-4 py-2 rounded-full shadow-md backdrop-blur-md hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-primary-text/50 transition-all duration-300"
          >
            <MdOutlineFileDownload className="text-lg" />
            <span className="text-sm font-semibold tracking-wide">
              Download Resume
            </span>
          </a>

          <span className="text-sm text-secondary-text font-mono italic mt-2 text-right">
            Open to freelance & collab — let’s build something.
          </span>
        </div>
      </div>

      {/* Bottom microtext with separator */}
      <div className="mt-12 pt-4 border-t border-secondary-text/20 text-center text-xs text-secondary-text font-mono">
        &copy; {new Date().getFullYear()} Ayushman Kumar. All rights reserved.
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary-text text-white shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </footer>
  );
}
