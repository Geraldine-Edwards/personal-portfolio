import type { FC } from "react"
import { useState, useEffect } from "react"
import { FiMenu } from 'react-icons/fi'

type NavbarProps = {
  onMenuClick: () => void
}

const Navbar: FC<NavbarProps> = ({ onMenuClick }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // maximum upward translation in px
  const maxTranslate = 80
  // calculate translation proportional to scroll (clamp to maxTranslate)
  const translateY = Math.min(scrollY, maxTranslate)

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-12 py-6 flex justify-between items-center">
        {/* Logo / Name moves up as user scrolls */}
        <div
          className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight transition-transform duration-100"
          style={{ transform: `translateY(-${translateY}px)` }}
        >
          Geraldine Edwards
        </div>

        {/* Menu stays fixed */}
        <button
          onClick={onMenuClick}
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