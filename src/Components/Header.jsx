import React, { useState, useEffect, useRef } from 'react';
import DarkModeToggle from './DarkToggle';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaHome, FaUserAlt, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip';

gsap.registerEffect(useGSAP);

const navItems = [
  { name: 'Home', link: '#home', icon: <FaHome /> },
  { name: 'About', link: '#about', icon: <FaUserAlt /> },
  { name: 'Skills', link: '#skills', icon: <FaTools /> },
  { name: 'Projects', link: '#projects', icon: <FaProjectDiagram /> },
  { name: 'Contact', link: '#contact', icon: <FaEnvelope /> },
];

function Header() {
  const [navMenu, setNavMenu] = useState(false);
  const [showCapsuleNav, setShowCapsuleNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const capsuleRef = useRef(null);

  const toggleNavMenu = () => setNavMenu(!navMenu);

  useEffect(() => {
    const handleScroll = () => {
      setShowCapsuleNav(window.scrollY > 80);

      const sections = navItems.map((item) => document.querySelector(item.link));
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(navItems[i].link);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      'nav a',
      { opacity: 0, scale: 0.6, y: -50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
      }
    );
  }, []);

  useGSAP(() => {
    if (showCapsuleNav && capsuleRef.current) {
      gsap.fromTo(
        capsuleRef.current,
        { opacity: 0, y: -30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, [showCapsuleNav]);

  return (
    <>
      {/* Full Nav (Desktop and Mid Screens) */}
      <nav className="hidden sm:flex h-[7vh] fixed top-0 left-0 w-full backdrop-blur-md shadow-2xs shadow-secondary-text/20 z-40 px-4 md:px-6">
        <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
          {/* Logo */}
          <a href="#home" className="text-lg font-bold text-primary-text whitespace-nowrap">
            <span className="text-secondary-text">Ayushman</span> Portfolio
          </a>

          {/* Nav Items */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 ml-4">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.link}
                className={`text-[15px] md:text-[17px] font-semibold transition-colors duration-300 cursor-pointer ${
                  activeSection === item.link ? 'text-primary-text' : 'text-secondary-text hover:text-primary-text'
                }`}
              >
                {item.name}
              </a>
            ))}
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Capsule Nav (Mobile - On Scroll) */}
      {showCapsuleNav && (
        <div
          ref={capsuleRef}
          className="fixed top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/5 backdrop-blur-md border border-primary-text/30 rounded-full shadow-xl flex items-center gap-4 z-50 sm:hidden"
        >
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.link}
              data-tooltip-id="nav-tooltip"
              data-tooltip-content={item.name}
              className={`text-[18px] text-secondary-text hover:scale-110 transition-transform duration-300 ${
                activeSection === item.link ? 'text-primary-text' : 'opacity-70'
              }`}
            >
              {item.icon}
            </a>
          ))}
          <DarkModeToggle />
          <Tooltip id="nav-tooltip" place="bottom" className="!text-[12px]" />
        </div>
      )}

      {/* Logo for Mobile Always Visible */}
      {/* <div className="fixed top-4 left-4 sm:hidden z-50">
        <a href="#home" className="text-base font-bold text-primary-text">
          Ayushman
        </a>
      </div> */}
    </>
  );
}

export default Header;