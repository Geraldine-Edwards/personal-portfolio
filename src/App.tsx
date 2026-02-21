import { useState } from "react"
import Navbar from "./components/Navbar"
import MenuOverlay from "./components/MenuOverlay"
import Hero from "./components/Hero"
import Work from "./components/Work"
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (section: string) => {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
    setMenuOpen(false)
  }

  return (
    <div className="font-sans">
      <Navbar onMenuClick={() => setMenuOpen(true)} />
      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        handleClick={handleClick}
      />

      <Hero />
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default App