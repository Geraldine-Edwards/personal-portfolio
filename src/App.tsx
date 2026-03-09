import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import MenuOverlay from "./components/MenuOverlay"
import Hero from "./components/Hero"
import Work from "./components/Work"
import Skills from "./components/Skills"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import ThankYou from "./components/ThankYou"

function AppContent() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (section: string) => {
    const el = document.getElementById(section)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setMenuOpen(false)
  }

  // Only show navbar/menu if NOT on thank-you page
  const showNavbar = location.pathname !== "/thank-you"

  return (
    <div className="font-sans">
      {showNavbar && (
        <>
          <Navbar onMenuClick={() => setMenuOpen(true)} />
          <MenuOverlay
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            handleClick={handleClick}
          />
        </>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <About />
              <Work />
              <Skills />
              <Testimonials />
              <Contact />
            </main>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}