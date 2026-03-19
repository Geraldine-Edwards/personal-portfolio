import Navbar from "./Navbar";

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <header>
    <Navbar onMenuClick={onMenuClick} />
  </header>
);

export default Header;