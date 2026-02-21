import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuOverlay from "./components/MenuOverlay";
import Hero from "./components/Hero"


function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>

      <Navbar onMenuClick={() => setMenuOpen(true)} />

      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <Hero />
      {/* Test sections */}

      <section
        id="work"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-serif">Work</h2>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-serif">About</h2>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-serif">Contact</h2>
      </section>

    </div>
  )
}

export default App