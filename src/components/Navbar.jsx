import { Button } from '@geist-ui/core';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import AppMenu from './AppMenu';

function Navbar({ toggleScroll }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    toggleScroll(menuOpen);
  }, [menuOpen]);

  return !menuOpen ? (
    <nav className="nav--normal">
      <img
        src="icon.png"
        alt="logo"
        className="nav--logo fadedown"
        style={{ animationDelay: '100ms' }}
      />
      <p className="nav--title fadedown" style={{ animationDelay: '50ms' }}>
        ount.
      </p>
      <Button
        auto
        type="abort"
        className="fadedown"
        icon={<Menu />}
        onClick={toggleMenu}
        padding="5px"
        height="50px"
        margin="none"
      ></Button>
    </nav>
  ) : (
    <AppMenu handleClick={toggleMenu} />
  );
}

export default Navbar;
