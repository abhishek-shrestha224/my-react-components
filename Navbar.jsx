import { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const navRef = useRef();

  const handleToggleNavbar = () => {
    navRef.current.classList.toggle("active");
    setNavbarActive((current) => !current);
  };

  const handleClick = () => {
    navRef.current.classList.toggle("active");
    setNavbarActive((current) => !current);
  };

  return (
    <header>
      <img src="/img/logo.png" className="navbar-logo" alt="Logo" />
      <nav ref={navRef} className="nav">
        <li onClick={handleClick}>
          <a href="#">Home</a>
        </li>
        <li onClick={handleClick}>
          <a href="#features">Features</a>
        </li>
        <li onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </nav>
      <button onClick={handleToggleNavbar} className="nav-btn">
        {navbarActive ? <TfiClose /> : <RxHamburgerMenu />}
      </button>
    </header>
  );
};

export default Navbar;
