import { useState } from "react"
import Navbar from "./components/Navbar"
import MenuOverlay from "./components/MenuOverlay"
import Hero from "./components/Hero"
import Work from "./components/Work"
import Skills from "./components/Skills"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
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

      <main>
      <Hero />
      <Work />
      <Skills />
      <About />
      <Testimonials />
      <Contact />
      </main>
    </div>
  )
}

export default App