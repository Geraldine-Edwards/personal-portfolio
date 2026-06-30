import Navbar from "./Navbar";

type HeaderProps = {
  menuOpen: boolean;
  onMenuClick: () => void;
};

const Header = ({ menuOpen, onMenuClick }: HeaderProps) => (
  <header>
    <Navbar menuOpen={menuOpen} onMenuClick={onMenuClick} />
  </header>
);

export default Header;