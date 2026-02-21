import { FC } from "react"

type NavbarProps = {
  onMenuClick: () => void
}

const Navbar: FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-12 py-6 flex justify-between items-center">
        <div className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight">
          Geraldine Edwards
        </div>
        <button
          onClick={onMenuClick}
          className="font-serif text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-widest"
        >
          MENU
        </button>
      </div>
    </header>
  )
}

export default Navbar