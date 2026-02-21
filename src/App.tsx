import { useState } from "react"
import Navbar from "./components/Navbar"
import MenuOverlay from "./components/MenuOverlay"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>

      <Navbar onMenuClick={() => setMenuOpen(true)} />

      <MenuOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      {/* Test sections */}

      <section
        id="work"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-serif">Work Section</h2>
      </section>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-serif">About Section</h2>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center"
      >
        <h2 className="text-4xl font-serif">Contact Section</h2>
      </section>

    </div>
  )
}

export default App