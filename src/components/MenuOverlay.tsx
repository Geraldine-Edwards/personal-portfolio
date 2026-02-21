type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function MenuOverlay({ isOpen, onClose }: Props) {
  if (!isOpen) return null

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col justify-center px-10">
      
      <nav className="flex flex-col gap-12">
  <button
    onClick={() => handleClick("work")}
    className="text-6xl md:text-7xl font-serif text-left"
  >
    Work
  </button>
  <button
    onClick={() => handleClick("about")}
    className="text-6xl md:text-7xl font-serif text-left"
  >
    About
  </button>
  <button
    onClick={() => handleClick("contact")}
    className="text-6xl md:text-7xl font-serif text-left"
  >
    Contact
  </button>
</nav>

      <button
        onClick={onClose}
        className="absolute top-8 right-10 text-lg md:text-xl lg:text-2xl font-serif tracking-widest"
      >
        CLOSE
      </button>

    </div>
  )
}