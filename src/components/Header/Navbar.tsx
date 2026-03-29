import { useState, useEffect } from "react"
import { FiMenu } from 'react-icons/fi'

type NavbarProps = {
  menuOpen: boolean;
  onMenuClick: () => void
}

const Navbar = ({ menuOpen, onMenuClick }: NavbarProps) => {
  // Track how far the element moves (matches what UI uses)
  const [translateY, setTranslateY] = useState(0)

  // Maximum upward translation in px
  const maxTranslate = 80

  useEffect(() => {
    const handleScroll = () => {
      // Move up as you scroll, but never more than 80 pixels.
      const newTranslateY = Math.min(window.scrollY, maxTranslate)
      // Avoids component re-render if the value hasn't changed (prev = current value)
      setTranslateY(prev  => (prev !== newTranslateY ? newTranslateY : prev))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-12 py-6 flex justify-between items-center">
        
        {/* Logo / Name moves up as user scrolls */}
        <div
          className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight transition-transform duration-100"
          // Use the translateY value for the UI
          style={{ transform: `translateY(-${translateY}px)` }}
        >
          Geraldine Edwards
        </div>

        {/* Menu stays fixed */}
        <button
          onClick={onMenuClick}
          aria-expanded={menuOpen} 
          aria-controls="main-menu" 
          className=" flex items-center gap-2 font-serif text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-widest"
        >
          <span>MENU</span>
          <FiMenu size={24} />
        </button>
        
      </div>
    </header>
  )
}

export default Navbar