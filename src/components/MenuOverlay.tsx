import { FC } from "react"
import { motion } from "framer-motion"

type MenuOverlayProps = {
  isOpen: boolean
  onClose: () => void
  handleClick: (section: string) => void
}

const MenuOverlay: FC<MenuOverlayProps> = ({ isOpen, onClose, handleClick }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center px-10 md:px-20">
      <nav className="flex flex-col gap-12">
        {["about", "work", "skills", "testimonials", "contact"].map((section, index) => (
          <motion.button
            key={section}
            onClick={() => handleClick(section)}
            className="relative text-5xl md:text-7xl font-serif text-left transition-all duration-300 ease-in-out group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1, 
              ease: "easeOut"
            }}
            whileHover={{ x: 12 }}
            whileTap={{ x: 6 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}

            {/* Sage underline */}
            <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#e0d1ce] transition-all duration-300 group-hover:w-full" />
          </motion.button>
        ))}
      </nav>

      <button
        onClick={onClose}
        className="absolute top-8 right-10 text-lg md:text-xl lg:text-2xl xl:text-3xl font-serif tracking-widest"
      >
        CLOSE
      </button>
    </div>
  )
}

export default MenuOverlay