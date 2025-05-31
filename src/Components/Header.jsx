import React, { use } from 'react'
import DarkModeToggle from './DarkToggle'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerEffect(useGSAP);





const navItems = [
    {
        name: "Home",
        link: "#home"
    },
    {
        name: "About",
        link: "#about"
    },
    {
        name: "Skills",
        link: "#skills"
    },
    {
        name: "Projects",
        link: "#projects"
    },
    {
        name: "Contact",
        link: "#contact"
    }
]


function Header() {
    useGSAP(() => {
    gsap.fromTo("nav a",{
        opacity: 0, scale: 0.6, y: -50
    },
    {
        opacity: 1, scale: 1, y: 0,
        duration: 1,
        ease: "power4.out",
    })
}, []);
    const [navMenu, setNavMenu] = React.useState(false);
    const toggleNavMenu = () => {
        setNavMenu(!navMenu);
    }
  return (
    <nav className={`h-[10vh] absolute flex w-full z-40 transition-all duration-300`}>

        {/* logo */}
        <div className='container flex items-center justify-between'>
            <a href="#home" className='text-lg sm:text-lg md:text-xl font-bold text-primary-text flex items-center'>
                <span className='relative z-10'>
                    <span className='text-secondary-text'>Ayushman</span>{" "} Portfolio
                </span>
            </a>
        </div>

        {/* nav items */}
        {/* desktop nav */}
        <div className='hidden sm:flex sm:items-center sm:mr-4 space-x-6'>
            {navItems.map((item, key)=>(
                <a href={item.link} key={key} className='text-[16px] md:text-lg font-semibold text-secondary-text 
                hover:text-primary-text transition-colors duration-300 cursor-pointer'>
                    {item.name}
                </a>
            ))}
            <DarkModeToggle />
        </div>

        {/* mobile nav */}
        <div className='sm:hidden flex items-center gap-3'>
            <button onClick={toggleNavMenu} className='text-lg text-secondary-text hover:text-primary-text
             transition-colors duration-300 cursor-pointer font-semibold'>
                {!navMenu ? '☰' : '✕'}
            </button>
            
            <DarkModeToggle />
        </div>

        <div>
            {/* mobile menu */}
            {navMenu && (
                <div className='absolute top-16 left-0 w-full bg-linear-br from-secondary-bg to-primary-bg p-4 shadow-lg rounded-lg sm:hidden'>
                    <ul className='space-y-4'>
                        {navItems.map((item, key) => (
                            <li key={key}>
                                <a href={item.link} className='text-lg text-secondary-text hover:text-primary-text transition-colors duration-300 cursor-pointer'>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    </nav>
  )
}

export default Header