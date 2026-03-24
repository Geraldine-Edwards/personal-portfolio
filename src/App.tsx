import { useState, useRef } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import MenuOverlay from "./components/Header/MenuOverlay";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import ThankYou from "./components/ThankYou";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";

function AppContent() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);

  const handleClick = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handlePrivacyClick = () => {
    // Save the element that triggered the modal
    triggerRef.current = document.activeElement as HTMLElement;
    setShowPrivacy(true);
  };

  const handleClosePrivacy = () => {
    setShowPrivacy(false);
    // Restore focus after modal unmounts
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  };

  // Only show navbar/menu if NOT on thank-you page
  const showNavbar = location.pathname !== "/thank-you";

  return (
    <div className="font-sans">
      {showNavbar && (
        <>
          <Header onMenuClick={() => setMenuOpen(true)} />
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
              <Footer onPrivacyClick={handlePrivacyClick} />
              
              {showPrivacy && (
                <PrivacyPolicy
                  onClose={handleClosePrivacy}
                  isOpen={showPrivacy}
                />
              )}
            </main>
          }
        />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}