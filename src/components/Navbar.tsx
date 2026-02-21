type Props = {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: Props) {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-white">

      <div className="max-w-[1100px] mx-auto px-6 py-6 flex justify-between items-center">

        <div className="font-serif text-xl md:text-2xl lg:text-5xl tracking-tight">
          Geraldine Edwards
        </div>

        <button
          onClick={onMenuClick}
          className="font-serif text-lg md:text-xl lg:text-2xl font-serif tracking-widest"
        >
          MENU
        </button>

      </div>

    </header>
  )
}